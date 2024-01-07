let expect = require('chai').expect;
let { isOddOrEven } = require("./EvenOrOdd.js");

describe('test the passed parameter', () => {
    it('test for undefined', () => {
        expect(isOddOrEven(2)).to.be.equal(undefined);
    })
    it('test for undefined', () => {
        expect(isOddOrEven([1,2,,3])).to.be.equal(undefined);
    })
    it('test for undefined', () => {
        expect(isOddOrEven({name: 'pesho'})).to.be.equal(undefined);
    })
    it('test for even', () => {
        expect(isOddOrEven('name')).to.be.equal('even');
    })
    it('test for odd', () => {
        expect(isOddOrEven('names')).to.be.equal('odd');
    })
    
})