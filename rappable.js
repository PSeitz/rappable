var metaphone = require('./rapmetaphone');

var koellnrap = require('./koellnrap');
var hyphenator = require('./hyphenator');


var service = {};

// function isRappable(word1, word2, lang){
//     if (!lang || lang == 'en') {
//         return metaphone.isGoodToRap(word1, word2);
//     }else if(lang == 'de'){
//         return koellnrap.isGoodToRap(word1, word2);
//     }
// }
function getFuncForLang(lang){
    if (!lang || lang == 'en' || lang == 'en-us' || lang == 'en-gb') {
        return metaphone.process;
    }else if(lang == 'de'){
        return koellnrap;
    }
}


// function isRappable(word1, word2, lang) {
//     var func = getFuncForLang(lang);
//     var val1 = func(word1);
//     var val2 = func(word2);

//     var numLastCharsToCheck = 3;
//     var length1 = val1.length;
//     var length2 = val2.length;
//     if (length1 <= 3 || length2 <= 3) {
//         numLastCharsToCheck = 2;
//     }
//     if (length1 <= 2 && length2 >= 2) {
//         numLastCharsToCheck = length1;
//     }
//     if (length2 <= 2 && length1 >= 2) {
//         numLastCharsToCheck = length2;
//     }
//     if (length1 <= 2 && length2 <= 2) {
//         numLastCharsToCheck = 1;
//     }
//     if (length1 == 2 && length2 == 2) {
//         numLastCharsToCheck = 2;
//     }
//     if (length1 == 1 && length2 >= 3 || length2 == 1 && length1 >= 3) {
//         return false;
//     }
//     if (length1 == 2 && length2 >= 4 || length2 == 2 && length1 >= 4) {
//         return false;
//     }
//     if (lang == 'de') {
//         if (val1.charAt(val1.length - 2).match(/[aeiou]/i) && val2.charAt(val2.length - 2).match(/[aeiou]/i)) {
//             numLastCharsToCheck = Math.min(numLastCharsToCheck, 2);
//         }
//     }

//     if (!val1.charAt(val1.length - 2).match(/[aeiou]/i)) { // for 'and' 'und'
//         numLastCharsToCheck = Math.max(numLastCharsToCheck, 3);
//     }

//     var lastX = val2.slice(-numLastCharsToCheck);
//     if (val1.endsWith(lastX)) {
//         return true;
//     }
//     return false;
// };

function isRappable(word1, word2, lang) {
    if (!lang) lang = 'en';
    var val = getRapValue(word1, word2, lang);
    return val >= 7;
}

function convertToNormalizedSyllables(word, lang){
    var func = getFuncForLang(lang);
    // console.log(hyphenator.hyphenateWord("de", word).split("­­"));
    word = hyphenator.hyphenateWord('de', word).split("-");
    for (var i = 0; i < word.length; i++) {
        // console.log(word[i]);
        word[i] = func(word[i]);
    }
    return word;
}
function checkReturnMatch(match){
    if (match && match[1]) return match[1]
    if (match && match[0]) return match[0]
    else return "";
}

function getPrefix(syllable){
    var match = syllable.match(/.+?(?=[a|e|i|o|u|ɝ|ɻ̊|ä|ü|ö])/gi)
    return checkReturnMatch(match);
}

function getSuffix(syllable){
    var match = syllable.match(/[a|e|i|o|u|ɝ|ɻ̊|ä|ü|ö]+(.*)/gi)
    // var match = syllable.match(/(?<=[a|e|i|o|u|ɝ|ɻ̊|ä|ü|ö]).*/gi)
    // var match = syllable.match(/(?<=[a|e|i|o|u|ɝ|ɻ̊|ä|ü|ö])(.*)/gi)

    match = checkReturnMatch(match);
    return match.replace(/[a|e|i|o|u|ɝ|ɻ̊|ä|ü|ö]*/gi, '')
}

function getSelbstLautBlock(syllable){
    var match = syllable.match(/([a|e|i|o|u|ɝ|ɻ̊|ä|ü|ö]+)/gi)
    return checkReturnMatch(match);
}

function getSuffixPrefixScore(s1, s2, func){
    var pref1 = func(s1);
    var pref2 = func(s2);
    if (!pref1 && !pref2) { return 1; }
    if (pref1) {
        if (pref1 == pref2)
            return 1.75;
        else{
            for (var i = 0; i < pref1.length; i++) {
                if(pref1[i] && pref2[i] && pref1[i] == pref2[i] ){
                    return 1.25;
                }
            }
        }
    }
    return 0.8;
}

function getRapValue(word1, word2, lang, debug) {
    if (!lang) lang = 'en';

    word1 = convertToNormalizedSyllables(word1, lang)
    word2 = convertToNormalizedSyllables(word2, lang)

    if (debug) {
        console.log(word1);
        console.log(word2);
    }
    // var end = Math.min(3, Math.min(word1.length, word2.length));

    var check = Math.min(word1.length, word2.length);

    var score = 0;
    var j = 0;
    for (var i = check; i --> 0;) {
        j++;
        var s1 = word1[word1.length - j], s2 = word2[word2.length - j];

        var syllableVal = 0;
        if (getSelbstLautBlock(s1) && (getSelbstLautBlock(s1) == getSelbstLautBlock(s2))){
            syllableVal += 6;

            syllableVal *= getSuffixPrefixScore(s1, s2, getPrefix);
            syllableVal *= getSuffixPrefixScore(s1, s2, getSuffix);
        }
        else if(j == 0 )
            break;

        // if (getPrefix(s1) && (getPrefix(s1) == getPrefix(s2)))
        //     syllableVal += 2;

        // if (getSuffix(s1) && (getSuffix(s1) == getSuffix(s2)))
        //     syllableVal += 2;

        
        // if (j == 0 ) // last syllable
        //     syllableVal = syllableVal * 4;

        syllableVal = Math.pow(syllableVal, 1/j);
        score += syllableVal;
        if (debug) {
            console.log("getPrefix("+s1+"):" + getPrefix(s1));
            console.log("getPrefix("+s2+"):" + getPrefix(s2));

            console.log("getSuffix("+s1+"):" + getSuffix(s1));
            console.log("getSuffix("+s2+"):" + getSuffix(s2));

            console.log(s1 + " " +s2 + " " + syllableVal);
        }
    }

    var numSyl1 = word1.length;
    var numSyl2 = word2.length;
    // console.log(score);
    if (Math.abs(numSyl2 - numSyl1) >= 2) {
        var maxSyl = Math.max(numSyl1, numSyl2) 
        var minSyl = Math.min(numSyl1, numSyl2) 
        score = score * (minSyl + 6) / (maxSyl + 6)
    }
    
    // console.log(score);

    return score;

    //a, e, i, o, u, ä, ö, ü
}


// getRapValue("reis", "mais", "de");

// getRapValue("tennisschläger", "penisträger", "de");

// getRapValue("tastatur", "rumrum", "de");


service.getRapValue = getRapValue;
service.isRappable = isRappable;
service.metaphone = metaphone;
service.koellnrap = koellnrap;
module.exports = service;
