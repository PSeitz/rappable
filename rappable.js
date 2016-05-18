var metaphone = require('./rapmetaphone');

var koellnrap = require('./koellnrap');

var service = {};

// function isRappable(word1, word2, lang){
//     if (!lang || lang == 'en') {
//         return metaphone.isGoodToRap(word1, word2);
//     }else if(lang == 'de'){
//         return koellnrap.isGoodToRap(word1, word2);
//     }
// }

function isRappable(word1, word2, lang) {
    var func;
    if (!lang || lang == 'en') {
        func = metaphone.process;
    }else if(lang == 'de'){
        func = koellnrap;
    }
    var val1 = func(word1);
    var val2 = func(word2);

    var numLastCharsToCheck = 3;
    var length1 = val1.length;
    var length2 = val2.length;
    if (length1 <= 3 || length2 <= 3) {
        numLastCharsToCheck = 2;
    }
    if (length1 <= 2 && length2 >= 2) {
        numLastCharsToCheck = length1;
    }
    if (length2 <= 2 && length1 >= 2) {
        numLastCharsToCheck = length2;
    }
    if (length1 <= 2 && length2 <= 2) {
        numLastCharsToCheck = 1;
    }
    if (length1 == 2 && length2 == 2) {
        numLastCharsToCheck = 2;
    }
    if (length1 == 1 && length2 >= 3 || length2 == 1 && length1 >= 3) {
        return false;
    }
    if (length1 == 2 && length2 >= 4 || length2 == 2 && length1 >= 4) {
        return false;
    }
    if (lang == 'de') {
        if (val1.charAt(val1.length - 2).match(/[aeiou]/i) && val2.charAt(val2.length - 2).match(/[aeiou]/i)) {
            numLastCharsToCheck = Math.min(numLastCharsToCheck, 2);
        }
    }
    var lastX = val2.slice(-numLastCharsToCheck);
    if (val1.endsWith(lastX)) {
        return true;
    }
    return false;
};


service.isRappable = isRappable;
service.metaphone = metaphone;
service.koellnrap = koellnrap;
module.exports = service;