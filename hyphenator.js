// Copyright (c) 2015  Mathias Nater, Zürich (mathiasnater at gmail dot com)

// The following license applies to all parts of this software except as
// documented below:

// ====

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

// ====

// Some files located in the patterns and testuite/files directories are
// externally maintained files used by this software which have their
// own licenses; we recommend you read them, as their terms may differ from
// the terms above.

var service = {};

service.enableCache = true;
service.enableReducedPatternSet = false;

/**
 * A number wich indicates the minimal length of words to hyphenate.
 * @default 6
 */
service.min = 6;

var languages = {};

/**
 * @member {Array} Hyphenator~wwhpStore
 * @desc
 * Array (typed if supported) container for hyphenation points
 * @access private
 * @see {@link Hyphenator~hyphenateWord}
 */
var wwhpStore = (function () {
    return new Uint8Array(32);
}());

// container for charCodes
var wwAsMappedCharCodeStore = (function () {
    return new Int32Array(32);
}());

//TODO check to remove this
// var hyphen = String.fromCharCode(173);
var hyphen = "-";

var exceptions = {};

/**
 * @member {string} Hyphenator~url
 * @desc
 * A string containing a insane RegularExpression to match URL's
 * @access private
 */
var url = '(?:\\w*:\/\/)?(?:(?:\\w*:)?(?:\\w*)@)?(?:(?:(?:[\\d]{1,3}\\.){3}(?:[\\d]{1,3}))|(?:(?:www\\.|[a-zA-Z]\\.)?[a-zA-Z0-9\\-\\.]+\\.(?:[a-z]{2,4})))(?::\\d*)?(?:\/[\\w#!:\\.?\\+=&%@!\\-]*)*';
//      protocoll     usr     pwd                    ip               or                          host                 tld        port               path

/**
 * @member {string} Hyphenator~mail
 * @desc
 * A string containing a RegularExpression to match mail-adresses
 * @access private
 */
var mail = '[\\w-\\.]+@[\\w\\.]+';

/**
 * @method Hyphenator~createCharMap
 * @desc
 * reads the charCodes from lo.characters and stores them in a bidi map:
 * charMap.int2code =  [0: 97, //a
 *                      1: 98, //b
 *                      2: 99] //c etc.
 * charMap.code2int = {"97": 0, //a
 *                     "98": 1, //b
 *                     "99": 2} //c etc.
 * @access private
 * @param {Object} language object
 */
var CharMap = function () {
    this.int2code = [];
    this.code2int = {};
    this.add = function (newValue) {
        if (!this.code2int[newValue]) {
            this.int2code.push(newValue);
            this.code2int[newValue] = this.int2code.length - 1;
        }
    };
};

/**
 * @constructor Hyphenator~ValueStore
 * @desc Storage-Object for storing hyphenation points (aka values)
 * @access private
 */
var ValueStore = function (len) {
    this.keys = (function () {
        return new Uint8Array(len);
        // var i, r;
        // if (Object.prototype.hasOwnProperty.call(window, "Uint8Array")) { //IE<9 doesn't have window.hasOwnProperty (host object)
        //     return new window.Uint8Array(len);
        // }
        // r = [];
        // r.length = len;
        // for (i = r.length - 1; i >= 0; i -= 1) {
        //     r[i] = 0;
        // }
        // return r;
    }());
    this.startIndex = 1;
    this.actualIndex = 2;
    this.lastValueIndex = 2;
    this.add = function (p) {
        this.keys[this.actualIndex] = p;
        this.lastValueIndex = this.actualIndex;
        this.actualIndex += 1;
    };
    this.add0 = function () {
        //just do a step, since array is initialized with zeroes
        this.actualIndex += 1;
    };
    this.finalize = function () {
        var start = this.startIndex;
        this.keys[start] = this.lastValueIndex - start;
        this.startIndex = this.lastValueIndex + 1;
        this.actualIndex = this.lastValueIndex + 2;
        return start;
    };
};


/**
 * @method Hyphenator~convertPatternsToArray
 * @desc
 * converts the patterns to a (typed, if possible) array as described by Liang:
 *
 * 1. Create the CharMap: an alphabet of used character codes mapped to an int (e.g. a: "97" -> 0)
 *    This map is bidirectional:
 *    charMap.code2int is an object with charCodes as keys and corresponging ints as values
 *    charMao.int2code is an array of charCodes at int indizes
 *    the length of charMao.int2code is equal the length of the alphabet
 *
 * 2. Create a ValueStore: (typed) array that holds "values", i.e. the digits extracted from the patterns
 *    The first value starts at index 1 (since the trie is initialized with zeroes, starting at 0 would create errors)
 *    Each value starts with its length at index i, actual values are stored in i + n where n < length
 *    Trailing 0 are not stored. So pattern values like e.g. "010200" will become […,4,0,1,0,2,…]
 *    The ValueStore-Object manages handling of indizes automatically. Use ValueStore.add(p) to add a running value.
 *    Use ValueStore.finalize() when the last value of a pattern is added. It will set the length and return the starting index of the pattern.
 *    To prevent doubles we could temporarly store the values in a object {value: startIndex} and only add new values,
 *    but this object deoptimizes very fast (new hidden map for each entry); here we gain speed and pay memory
 *    
 * 3. Create and zero initialize a (typed) array to store the trie. The trie uses two slots for each entry/node:
 *    i: a link to another position in the array or -1 if the pattern ends here or more rows have to be added.
 *    i + 1: a link to a value in the ValueStore or 0 if there's no value for the path to this node.
 *    Although the array is one-dimensional it can be described as an array of "rows",
 *    where each "row" is an array of length trieRowLength (see below).
 *    The first entry of this "row" represents the first character of the alphabet, the second a possible link to value store,
 *    the third represents the second character of the alphabet and so on…
 *
 * 4. Initialize trieRowLength (length of the alphabet * 2)
 *
 * 5. Now we apply extract to each pattern collection (patterns of the same length are collected and concatenated to one string)
 *    extract goes through these pattern collections char by char and adds them either to the ValueStore (if they are digits) or
 *    to the trie (adding more "rows" if necessary, i.e. if the last link pointed to -1).
 *    So the first "row" holds all starting characters, where the subsequent rows hold the characters that follow the
 *    character that link to this row. Therefor the array is dense at the beginning and very sparse at the end.
 * 
 * 
 * @access private
 * @param {Object} language object
 */
var convertPatternsToArray = function (lo) {
    var trieNextEmptyRow = 0,
        i,
        charMapc2i,
        valueStore,
        indexedTrie,
        trieRowLength,

        extract = function (patternSizeInt, patterns) {
            var charPos = 0,
                charCode = 0,
                mappedCharCode = 0,
                rowStart = 0,
                nextRowStart = 0,
                prevWasDigit = false;
            for (charPos = 0; charPos < patterns.length; charPos += 1) {
                charCode = patterns.charCodeAt(charPos);
                if ((charPos + 1) % patternSizeInt !== 0) {
                    //more to come…
                    if (charCode <= 57 && charCode >= 49) {
                        //charCode is a digit
                        valueStore.add(charCode - 48);
                        prevWasDigit = true;
                    } else {
                        //charCode is alphabetical
                        if (!prevWasDigit) {
                            valueStore.add0();
                        }
                        prevWasDigit = false;
                        if (nextRowStart === -1) {
                            nextRowStart = trieNextEmptyRow + trieRowLength;
                            trieNextEmptyRow = nextRowStart;
                            indexedTrie[rowStart + mappedCharCode * 2] = nextRowStart;
                        }
                        mappedCharCode = charMapc2i[charCode];
                        rowStart = nextRowStart;
                        nextRowStart = indexedTrie[rowStart + mappedCharCode * 2];
                        if (nextRowStart === 0) {
                            indexedTrie[rowStart + mappedCharCode * 2] = -1;
                            nextRowStart = -1;
                        }
                    }
                } else {
                    //last part of pattern
                    if (charCode <= 57 && charCode >= 49) {
                        //the last charCode is a digit
                        valueStore.add(charCode - 48);
                        indexedTrie[rowStart + mappedCharCode * 2 + 1] = valueStore.finalize();
                    } else {
                        //the last charCode is alphabetical
                        if (!prevWasDigit) {
                            valueStore.add0();
                        }
                        valueStore.add0();
                        if (nextRowStart === -1) {
                            nextRowStart = trieNextEmptyRow + trieRowLength;
                            trieNextEmptyRow = nextRowStart;
                            indexedTrie[rowStart + mappedCharCode * 2] = nextRowStart;
                        }
                        mappedCharCode = charMapc2i[charCode];
                        rowStart = nextRowStart;
                        if (indexedTrie[rowStart + mappedCharCode * 2] === 0) {
                            indexedTrie[rowStart + mappedCharCode * 2] = -1;
                        }
                        indexedTrie[rowStart + mappedCharCode * 2 + 1] = valueStore.finalize();
                    }
                    rowStart = 0;
                    nextRowStart = 0;
                    prevWasDigit = false;
                }
            }
        };/*,
        prettyPrintIndexedTrie = function (rowLength) {
            var s = "0: ",
                idx;
            for (idx = 0; idx < indexedTrie.length; idx += 1) {
                s += indexedTrie[idx];
                s += ",";
                if ((idx + 1) % rowLength === 0) {
                    s += "\n" + (idx + 1) + ": ";
                }
            }
            console.log(s);
        };*/

    lo.charMap = new CharMap();
    for (i = 0; i < lo.patternChars.length; i += 1) {
        lo.charMap.add(lo.patternChars.charCodeAt(i));
    }
    charMapc2i = lo.charMap.code2int;

    lo.valueStore = valueStore = new ValueStore(lo.valueStoreLength);
    lo.indexedTrie = new Int32Array(lo.patternArrayLength * 2);
    // if (Object.prototype.hasOwnProperty.call(window, "Int32Array")) { //IE<9 doesn't have window.hasOwnProperty (host object)
    //     lo.indexedTrie = new window.Int32Array(lo.patternArrayLength * 2);
    // } else {
    //     lo.indexedTrie = [];
    //     lo.indexedTrie.length = lo.patternArrayLength * 2;
    //     for (i = lo.indexedTrie.length - 1; i >= 0; i -= 1) {
    //         lo.indexedTrie[i] = 0;
    //     }
    // }
    indexedTrie = lo.indexedTrie;
    trieRowLength = lo.charMap.int2code.length * 2;

    for (i in lo.patterns) {
        if (lo.patterns.hasOwnProperty(i)) {
            extract(parseInt(i, 10), lo.patterns[i]);
        }
    }
    //prettyPrintIndexedTrie(lo.charMap.int2code.length * 2);
};

/**
 * @method Hyphenator~doCharSubst
 * @desc
 * Replace chars in a word
 *
 * @param {Object} loCharSubst Map of substitutions ({'ä': 'a', 'ü': 'u', …})
 * @param {string} w the word
 * @returns string The word with substituted characers
 * @access private
 */
var doCharSubst = function (loCharSubst, w) {
    var subst, r;
    for (subst in loCharSubst) {
        if (loCharSubst.hasOwnProperty(subst)) {
            r = w.replace(new RegExp(subst, 'g'), loCharSubst[subst]);
        }
    }
    return r;
};

/**
 * @method Hyphenator.addExceptions
     * @desc
 * Adds the exceptions from the string to the appropriate language in the 
 * {@link Hyphenator~languages}-object
 * @param {string} lang The language
 * @param {string} words A comma separated string of hyphenated words WITH spaces.
 * @access public
 * @example &lt;script src = "Hyphenator.js" type = "text/javascript"&gt;&lt;/script&gt;
 * &lt;script type = "text/javascript"&gt;
 *   Hyphenator.addExceptions('de','ziem-lich, Wach-stube');
 *   Hyphenator.run();
 * &lt;/script&gt;
 */
var addExceptions = function (lang, words) {
    if (lang === '') {
        lang = 'global';
    }
    if (exceptions.hasOwnProperty(lang)) {
        exceptions[lang] += ", " + words;
    } else {
        exceptions[lang] = words;
    }
};

var prepareLanguagesObj = function (lang) {
    var lo = languages[lang], wrd;

    if (!lo.prepared) {
        if (service.enableCache) {
            lo.cache = {};
            //Export
            //lo['cache'] = lo.cache;
        }
        if (service.enableReducedPatternSet) {
            lo.redPatSet = {};
        }
        // //add exceptions from the pattern file to the local 'exceptions'-obj
        if (lo.hasOwnProperty('exceptions')) {
            addExceptions(lang, lo.exceptions);
            delete lo.exceptions;
        }
        //copy global exceptions to the language specific exceptions
        if (exceptions.hasOwnProperty('global')) {
            if (exceptions.hasOwnProperty(lang)) {
                exceptions[lang] += ', ' + exceptions.global;
            } else {
                exceptions[lang] = exceptions.global;
            }
        }
        //move exceptions from the the local 'exceptions'-obj to the 'language'-object
        if (exceptions.hasOwnProperty(lang)) {
            lo.exceptions = convertExceptionsToObject(exceptions[lang]);
            delete exceptions[lang];
        } else {
            lo.exceptions = {};
        }
        convertPatternsToArray(lo);
        if (String.prototype.normalize) {
            wrd = '[\\w' + lo.specialChars + lo.specialChars.normalize("NFD") + String.fromCharCode(173) + String.fromCharCode(8204) + '-]{' + service.min + ',}';
        } else {
            wrd = '[\\w' + lo.specialChars + String.fromCharCode(173) + String.fromCharCode(8204) + '-]{' + service.min + ',}';
        }
        lo.genRegExp = new RegExp('(' + wrd + ')', 'gi');
        lo.prepared = true;
    }
};

function loadLanguage(lang){
    if (languages[lang]) return languages[lang];
    var path = "./patterns/" + lang;
    var lo = require(path)[lang];
    languages[lang] = lo;
    prepareLanguagesObj(lang);
    return languages[lang];
}

/**
 * @method Hyphenator~hyphenateWord
 * @desc
 * This function is the heart of Hyphenator.js. It returns a hyphenated word.
 *
 * If there's already a {@link Hyphenator~hypen} in the word, the word is returned as it is.
 * If the word is in the exceptions list or in the cache, it is retrieved from it.
 * If there's a '-' hyphenate the parts.
 * The hyphenated word is returned and (if acivated) cached.
 * Both special Events onBeforeWordHyphenation and onAfterWordHyphenation are called for the word.
 * @param {string} lang The language of the word
 * @param {string} word The word
 * @returns string The hyphenated word
 * @access private
 */
var hyphenateWord = function (lang, word) {
    var lo = loadLanguage(lang);
    var parts,
        i,
        pattern = "",
        ww,
        wwlen,
        wwhp = wwhpStore,
        pstart,
        plen,
        hp,
        wordLength = word.length,
        hw = '',
        charMap = lo.charMap.code2int,
        charCode,
        mappedCharCode,
        row = 0,
        link = 0,
        value = 0,
        values,
        indexedTrie = lo.indexedTrie,
        valueStore = lo.valueStore.keys,
        wwAsMappedCharCode = wwAsMappedCharCodeStore;

    // word = onBeforeWordHyphenation(word, lang);
    if (word === '') {
        hw = '';
    } else if (service.enableCache && lo.cache && lo.cache.hasOwnProperty(word)) { //the word is in the cache
        hw = lo.cache[word];
    } else if (word.indexOf(hyphen) !== -1) {
        //word already contains shy; -> leave at it is!
        hw = word;
    } else if (lo.exceptions.hasOwnProperty(word)) { //the word is in the exceptions list
        hw = lo.exceptions[word].replace(/-/g, hyphen);
    } else if (word.indexOf('-') !== -1) {
        //word contains '-' -> hyphenate the parts separated with '-'
        parts = word.split('-');
        for (i = 0; i < parts.length; i += 1) {
            parts[i] = hyphenateWord(lo, lang, parts[i]);
        }
        hw = parts.join('-');
    } else {
        ww = word.toLowerCase();
        if (String.prototype.normalize) {
            ww = ww.normalize("NFC");
        }
        if (lo.hasOwnProperty("charSubstitution")) {
            ww = doCharSubst(lo.charSubstitution, ww);
        }
        if (word.indexOf("'") !== -1) {
            ww = ww.replace(/'/g, "’"); //replace APOSTROPHE with RIGHT SINGLE QUOTATION MARK (since the latter is used in the patterns)
        }
        ww = '_' + ww + '_';
        wwlen = ww.length;
        //prepare wwhp and wwAsMappedCharCode
        for (pstart = 0; pstart < wwlen; pstart += 1) {
            wwhp[pstart] = 0;
            charCode = ww.charCodeAt(pstart);
            if (charMap[charCode] !== undefined) {
                wwAsMappedCharCode[pstart] = charMap[charCode];
            } else {
                wwAsMappedCharCode[pstart] = -1;
            }
        }
        //get hyphenation points for all substrings
        for (pstart = 0; pstart < wwlen; pstart += 1) {
            row = 0;
            pattern = '';
            for (plen = pstart; plen < wwlen; plen += 1) {
                mappedCharCode = wwAsMappedCharCode[plen];
                if (mappedCharCode === -1) {
                    break;
                }
                if (service.enableReducedPatternSet) {
                    pattern += ww.charAt(plen);
                }
                link = indexedTrie[row + mappedCharCode * 2];
                value = indexedTrie[row + mappedCharCode * 2 + 1];
                if (value > 0) {
                    hp = valueStore[value];
                    while (hp) {
                        hp -= 1;
                        if (valueStore[value + 1 + hp] > wwhp[pstart + hp]) {
                            wwhp[pstart + hp] = valueStore[value + 1 + hp];
                        }
                    }
                    if (service.enableReducedPatternSet) {
                        if (!lo.redPatSet) {
                            lo.redPatSet = {};
                        }
                        if (valueStore.subarray) {
                            values = valueStore.subarray(value + 1, value + 1 + valueStore[value]);
                        } else {
                            values = valueStore.slice(value + 1, value + 1 + valueStore[value]);
                        }
                        lo.redPatSet[pattern] = recreatePattern(pattern, values);
                    }
                }
                if (link > 0) {
                    row = link;
                } else {
                    break;
                }
            }
        }
        //create hyphenated word
        for (hp = 0; hp < wordLength; hp += 1) {
            if (hp >= lo.leftmin && hp <= (wordLength - lo.rightmin) && (wwhp[hp + 1] % 2) !== 0) {
                hw += hyphen + word.charAt(hp);
            } else {
                hw += word.charAt(hp);
            }
        }
    }
    // hw = onAfterWordHyphenation(hw, lang);
    if (service.enableCache) { //put the word in the cache
        lo.cache[word] = hw;
    }
    return hw;
};

service.hyphenateWord = hyphenateWord;
module.exports = service;
