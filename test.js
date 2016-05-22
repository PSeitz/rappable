

var rappable = require('./rappable');

var expect = require('chai').expect;
var assert = require('chai').assert;
describe('rappable', function() {
    it('should be rappable in english', function () {

        expect(rappable.isRappable("Germany", "Company")).to.be.true;
        expect(rappable.isRappable("see", "knee")).to.be.true;
        expect(rappable.isRappable("primitive", "expensive")).to.be.true;
        expect(rappable.isRappable("believe", "achieve")).to.be.true;
        expect(rappable.isRappable("beat", "fleet")).to.be.true;
        expect(rappable.isRappable("cream", "seem")).to.be.true;
        expect(rappable.isRappable("fine", "rhine")).to.be.true;
        expect(rappable.isRappable("fabolous", "abakous")).to.be.true;
        expect(rappable.isRappable("laptop", "tanktop")).to.be.true;
        
    });

    it('should not be rappable in english', function () {
        expect(rappable.isRappable("tastatur", "rumrum")).to.be.false;
        expect(rappable.isRappable("nice", "house")).to.be.false;
        expect(rappable.isRappable("the", "above")).to.be.false;
        expect(rappable.isRappable("on", "humiliation")).to.be.false;
        expect(rappable.isRappable("the", "be")).to.be.false;
        expect(rappable.isRappable("will", "all")).to.be.false;
        // expect(rappable.isRappable("people,", "while,")).to.be.false;
    });

    it('should be rappable in german', function () {
        expect(rappable.isRappable("achterbahn", "ratatatan", 'de')).to.be.true;
        expect(rappable.isRappable("richtig", "nichtig", 'de')).to.be.true;
        expect(rappable.isRappable("richtig", "ehrlich", 'de')).to.be.true;
        expect(rappable.isRappable("krass", "nass", 'de')).to.be.true;

        expect(rappable.isRappable("beauftragt", "versagt", 'de')).to.be.true;
        expect(rappable.isRappable("besten", "diesen", 'de')).to.be.true;
        expect(rappable.isRappable("reis", "mais", 'de')).to.be.true;
        expect(rappable.isRappable("lebertran", "kram", 'de')).to.be.true;

        expect(rappable.isRappable("fabolus", "abakus", 'de')).to.be.true;

    });

    it('should not be rappable in german', function () {
        expect(rappable.isRappable("sein", "berlin", 'de')).to.be.false;
        expect(rappable.isRappable("sind", "und", 'de')).to.be.false;
        expect(rappable.isRappable("einem", "eingenommen", 'de')).to.be.false;
        expect(rappable.isRappable("vielleicht", "nicht", 'de')).to.be.false;
        expect(rappable.isRappable("Freund", "und", 'de')).to.be.false;
    });
});


