var assert  = require('assert');
var koellnrap = require('./koellnrap');
var rappable = require('./rappable');


// console.log(koellnrap("achterbahn"));
// console.log(koellnrap("ratatatan"));

// console.log(rappable.isRappable("achterbahn", "ratatatan", 'de'));

// console.log(koellnrap("einem"));
// console.log(koellnrap("eingenommen"));


// console.log(koellnrap("vielleicht"));
// console.log(koellnrap("mais"));
// console.log(koellnrap("reis"));

// console.log(koellnrap("lebertran"));
// console.log(koellnrap("kram,"));


var metaphone = require('./rapmetaphone');

// console.log(metaphone.process("eepeople,"));
// console.log(metaphone.process("eewhile,"));


var hyphenator = require('./hyphenator');
// console.log(rappable.getRapValue("einem", "eingenommen", "de"))
// console.log(rappable.getRapValue("lebertran", "kram", "de"))
// console.log(rappable.getRapValue("people,", "while,"))
// console.log(rappable.getRapValue("Germany", "Company"))

// console.log(rappable.getRapValue("Staaten", "Machthaber", "de", true))


// console.log(rappable.getRapValue("krass", "nass", "de", true))

// console.log(rappable.getRapValue("believe", "achieve", "en-gb", true))

// console.log(hyphenator.hyphenateWord('en', "achieve"));


// console.log(rappable.getRapValue("wollten", "geschichte", "de", true))

// console.log(rappable.getRapValue("regeln", "mögliche", "de", true))

// console.log(rappable.getRapValue("jeder", "des", "de", true))

// console.log(rappable.getRapValue("Bolschewismus", "Weiterbildung", "de", true))

// console.log(rappable.getRapValue("das", "darf", "de", true))

// console.log(rappable.getRapValue("richtig", "ehrlich", "de", true))
