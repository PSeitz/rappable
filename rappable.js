var metaphone = require('./rapmetaphone');

var service = {};

function isRappable(word1, word2, lang){
    if (!lang || lang = 'en') 
    {
        return metaphone.isGoodToRap(word1, word2);
    }
}

service.isRappable = isRappable;
service.metaphone = metaphone;
module.exports = service;