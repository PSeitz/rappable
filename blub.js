var assert  = require('assert');
var koellnrap = require('./koellnrap');
var rappable = require('./rappable');


console.log(koellnrap("achterbahn"));
console.log(koellnrap("ratatatan"));

console.log(rappable.isRappable("achterbahn", "ratatatan", 'de'));


