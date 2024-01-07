let expect = require('chai').expect;
let { lookupChar } = require('./CharLookup.js');

describe('test undefined inputs', () => {
    it('test string and number', () => {
        expect(lookupChar(12, 'string')).to.be.equal(undefined);
        expect(lookupChar([1, 2, 3], 'string')).to.be.equal(undefined);
        expect(lookupChar(4, [1, 2, 3])).to.be.equal(undefined);
        expect(lookupChar('name', [1, 2, 3])).to.be.equal(undefined);
        expect(lookupChar([1, 2, 3], 5)).to.be.equal(undefined);
        expect(lookupChar('string', 5.1)).to.be.equal(undefined);
    })
    it('test for invalid index', () => {
        expect(lookupChar('string', -1)).to.be.equal("Incorrect index");
        expect(lookupChar('string', 9)).to.be.equal("Incorrect index");
        expect(lookupChar('string', 6)).to.be.equal("Incorrect index");
    })
    it('test for correct parameters', () => {
        expect(lookupChar('string', 4)).to.be.equal('n');
        expect(lookupChar('string', 3)).to.be.equal('i');
        expect(lookupChar('string', 0)).to.be.equal('s');
    })
})