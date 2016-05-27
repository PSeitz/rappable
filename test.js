

var rappable = require('./rappable');

var expect = require('chai').expect;
var assert = require('chai').assert;
describe('rappable', function() {

    var tests = [
        { comp:["Germany", "Company"],          lang:'en', value:true},
        { comp:["see", "knee"],                 lang:'en', value:true},
        { comp:["primitive", "expensive"],      lang:'en', value:true},
        { comp:["believe", "achieve"],          lang:'en', value:true},
        { comp:["beat", "fleet"],               lang:'en', value:true},
        { comp:["cream", "seem"],               lang:'en', value:true},
        { comp:["fine", "rhine"],               lang:'en', value:true},
        { comp:["fabolous", "abakous"],         lang:'en', value:true},
        { comp:["laptop", "tanktop"],           lang:'en', value:true},

        { comp:["tastatur", "rumrum"],         lang:'en', value:false},
        { comp:["nice", "house"],              lang:'en', value:false},
        { comp:["the", "above"],               lang:'en', value:false},
        { comp:["on", "humiliation"],          lang:'en', value:false},
        { comp:["the", "be"],                  lang:'en', value:false},
        { comp:["will", "all"],                lang:'en', value:false},

        { comp:["achterbahn", "ratatatan"],    lang:'de', value:true},
        { comp:["richtig", "nichtig"],         lang:'de', value:true},
        { comp:["richtig", "ehrlich"],         lang:'de', value:true},
        { comp:["krass", "nass"],              lang:'de', value:true},
        { comp:["beauftragt", "versagt"],      lang:'de', value:true},
        { comp:["besten", "diesen"],           lang:'de', value:true},
        { comp:["reis", "mais"],               lang:'de', value:true},
        { comp:["lebertran", "kram"],          lang:'de', value:true},
        { comp:["fabolus", "abakus"],          lang:'de', value:true},

        { comp:["sein", "berlin"],             lang:'de', value:false},
        { comp:["sind", "und"],                lang:'de', value:false},
        { comp:["einem", "eingenommen"],       lang:'de', value:false},
        { comp:["vielleicht", "nicht"],        lang:'de', value:false},
        { comp:["Freund", "und"],              lang:'de', value:false},
        { comp:["Staaten", "Machthaber"],      lang:'de', value:false}

    ];

    tests.forEach(function(test) {
        it('should ' + (test.value ? '':'not') + ' be rappable in ' + test.lang + ' ' + test.comp[0] + ' ' + test.comp[1], function() {
            if (test.value) {
                expect(rappable.isRappable(test.comp[0], test.comp[1], test.lang)).to.be.true;
            }else{
                expect(rappable.isRappable(test.comp[0], test.comp[1], test.lang)).to.be.false;
            }
            
        });
    });
});


