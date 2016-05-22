/*
Copyright (c) 2011, Chris Umbel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/


function removecrap(token) {
    return token.replace(/[^a-z]/g, '');
}

function dedup(token) {
    return token.replace(/([^ceo])\1/g, '$1');
}

function dropInitialLetters(token) {
    if(token.match(/^(kn|gn|pn|ae|wr)/))
        return token.substr(1, token.length - 1);
        
    return token;
}

function dropBafterMAtEnd(token) {
    return token.replace(/mb$/, 'm');
}

function cTransform(token) {
    

    token = token.replace(/([^s]|^)(c)(h)/g, '$1x$3').trim();


    token = token.replace(/cia/g, 'xia');
    token = token.replace(/c(i|e|y)/g, 's$1');
    token = token.replace(/c/g, 'k'); 
    
    return token;
}

function dTransform(token) {
    token = token.replace(/d(ge|gy|gi)/g, 'j$1');
    token = token.replace(/d/g, 't');
    
    return token;
}

function dropG(token) {
    token = token.replace(/gh(^$|[^aeiou])/g, 'h$1');
    token = token.replace(/g(n|ned)$/g, '$1');    
    
    return token;
}

function transformG(token) {
    token = token.replace(/gh/g, 'f'); 
    token = token.replace(/([^g]|^)(g)(i|e|y)/g, '$1j$3');
    token = token.replace(/gg/g, 'g');
    token = token.replace(/g/g, 'k');    
    
    return token;
}

function dropH(token) {
    return token.replace(/([aeiou])h([^aeiou]|$)/g, '$1$2');
}

function transformCK(token) {
    return token.replace(/ck/g, 'k');
}
function transformPH(token) {
    return token.replace(/ph/g, 'f');
}

function transformQ(token) {
    return token.replace(/q/g, 'k');
}

function transformS(token) {
    return token.replace(/s(h|io|ia)/g, 'x$1');
}

function transformT(token) {
    token = token.replace(/t(ia|io)/g, 'x$1');
    token = token.replace(/th/, '0');
    
    return token;
}

function dropT(token) {
    return token.replace(/tch/g, 'ch');
}

function transformV(token) {
    return token.replace(/v/g, 'f');
}

function transformWH(token) {
    return token.replace(/^wh/, 'w');
}

function dropW(token) {
    return token.replace(/w([^aeiou]|$)/g, '$1');
}

function transformX(token) {
    token = token.replace(/^x/, 's');
    token = token.replace(/x/g, 'ks');
    return token;
}

function dropY(token) {
    return token.replace(/y([^aeiou]|$)/g, '$1');
}

function dropEndY(token) {
    return token.replace(/y$/g, 'e');
}

function transformZ(token) {
    return token.replace(/z/, 's');
}

function transformVowels(token) {
    return token.replace(/ea/, 'ee');
}

function transformSpecials(token) {
    token = token.replace(/ank/i, 'ænk');
    token = token.replace(/and/i, 'ænd');
    return token.replace(/the/i, 'thæ');
}



// function dropVowels(token) {  // not in rapmetaphone!
//     return token.charAt(0) + token.substr(1, token.length).replace(/[aeiou]/g, '');
// }

var Metaphone = function() {};
module.exports = Metaphone;

Metaphone.process = function(token, maxLength) {
    maxLength == maxLength || 32;
    token = token.toLowerCase();
    token = removecrap(token);
    token = dedup(token);
    token = dropInitialLetters(token);
    token = transformSpecials(token);
    token = dropBafterMAtEnd(token);
    token = transformCK(token);
    token = cTransform(token);
    token = dTransform(token);
    token = dropG(token);
    token = transformG(token);
    token = dropH(token);
    token = transformPH(token);
    token = transformQ(token);
    token = transformS(token);
    token = transformX(token);    
    token = transformT(token);
    token = dropT(token);
    token = transformV(token);
    token = transformWH(token);
    token = dropW(token);
    // token = dropY(token);
    token = dropEndY(token);
    token = transformZ(token);

    token = transformVowels(token);
    // token = dropVowels(token);
    
    token.toUpperCase();
    if(token.length >= maxLength)
        token = token.substring(0, maxLength);        

    return token.toUpperCase();
};


Metaphone.compare = function(stringA, stringB) {
    return this.process(stringA) == this.process(stringB);
};

String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

Metaphone.attach = function() {
    var phonetic = this;

    String.prototype.soundsLike = function(compareTo) {
        return phonetic.compare(this, compareTo);
    }
    
    String.prototype.phonetics = function() {
        return phonetic.process(this);
    }

    String.prototype.tokenizeAndPhoneticize = function(keepStops) {
        var phoneticizedTokens = [];
        
        tokenizer.tokenize(this).forEach(function(token) {
            if(keepStops || stopwords.words.indexOf(token) < 0)
                phoneticizedTokens.push(token.phonetics());
        });
        
        return phoneticizedTokens;
    }
};


// expose functions for testing    
Metaphone.dedup = dedup;
Metaphone.dropInitialLetters = dropInitialLetters;
Metaphone.dropBafterMAtEnd = dropBafterMAtEnd;
Metaphone.cTransform = cTransform;
Metaphone.dTransform = dTransform;
Metaphone.dropG = dropG;
Metaphone.transformG = transformG;
Metaphone.dropH = dropH;
Metaphone.transformCK = transformCK;
Metaphone.transformPH = transformPH;
Metaphone.transformQ = transformQ;
Metaphone.transformS = transformS;
Metaphone.transformT = transformT;
Metaphone.dropT = dropT;
Metaphone.transformV = transformV;
Metaphone.transformWH = transformWH;
Metaphone.dropW = dropW;
Metaphone.transformX = transformX;
// Metaphone.dropY = dropY;
Metaphone.transformZ = transformZ;
// Metaphone.dropVowels = dropVowels;




