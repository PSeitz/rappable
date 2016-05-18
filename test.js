

var rappable = require('./rappable');

var expect = require('chai').expect;
var assert = require('chai').assert;
describe('rappable', function() {
    it('should be rappable', function () {

        expect(rappable.isRappable("Germany", "Company")).to.be.true;
        expect(rappable.isRappable("see", "knee")).to.be.true;
        expect(rappable.isRappable("primitive", "expensive")).to.be.true;
        expect(rappable.isRappable("believe", "achieve")).to.be.true;
        expect(rappable.isRappable("beat", "fleet")).to.be.true;
        expect(rappable.isRappable("cream", "seem")).to.be.true;
        expect(rappable.isRappable("fine", "rhine")).to.be.true;
        expect(rappable.isRappable("fabolous", "abaskous")).to.be.true;
        expect(rappable.isRappable("laptop", "tanktop")).to.be.true;

        expect(rappable.isRappable("tastatur", "rumrum")).to.be.false;
        expect(rappable.isRappable("nice", "house")).to.be.false;
        expect(rappable.isRappable("the", "above")).to.be.false;
        expect(rappable.isRappable("on", "humiliation")).to.be.false;
        expect(rappable.isRappable("the", "be")).to.be.false;
        expect(rappable.isRappable("will", "all")).to.be.false;
        
    });
});


