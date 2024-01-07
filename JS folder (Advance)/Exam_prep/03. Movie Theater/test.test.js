let expect = require('chai').expect;
let { movieTheater } = require('./03. Movie Theater.js');

describe('test ageRestrictions inputs', () => {
    it('test case G', () => {
        let instance = movieTheater.ageRestrictions('G')
        expect(instance).to.be.equal('All ages admitted to watch the movie');
    })
    it('test case PG', () => {
        let instance = movieTheater.ageRestrictions('PG')
        expect(instance).to.be.equal('Parental guidance suggested! Some material may not be suitable for pre-teenagers');
    })
    it('test case R', () => {
        let instance = movieTheater.ageRestrictions('R')
        expect(instance).to.be.equal('Restricted! Under 17 requires accompanying parent or adult guardian');
    })
    it('test case NC-17', () => {
        let instance = movieTheater.ageRestrictions('NC-17')
        expect(instance).to.be.equal('No one under 17 admitted to watch the movie');
    })
    it('test default case with empty string', () => {
        let instance = movieTheater.ageRestrictions('')
        expect(instance).to.be.equal('There are no age restrictions for this movie');
    })
    it('test default case with empty number', () => {
        let instance = movieTheater.ageRestrictions(12)
        expect(instance).to.be.equal('There are no age restrictions for this movie');
    })
    it('test default case with empty arr', () => {
        let instance = movieTheater.ageRestrictions([])
        expect(instance).to.be.equal('There are no age restrictions for this movie');
    })
    it('test default case with empty obj', () => {
        let instance = movieTheater.ageRestrictions({})
        expect(instance).to.be.equal('There are no age restrictions for this movie');
    })
    it('test default case with empty null', () => {
        let instance = movieTheater.ageRestrictions(null)
        expect(instance).to.be.equal('There are no age restrictions for this movie');
    })
})
describe('test moneySpent func', () => {
    it('test valid inputs of moneySpent func', () => {
        expect(() => movieTheater.moneySpent(15, ['chips', 'banana'], ['soda', 'juice'])).to.not.throw('Invalid input');
        expect(() => movieTheater.moneySpent(-15, ['chips', 'banana'], ['soda', 'juice'])).to.not.throw('Invalid input');
    })
    it('test inValid inputs of moneySpent func', () => {
        expect(() => movieTheater.moneySpent('str', ['chips', 'banana'], ['soda', 'juice'])).to.throw('Invalid input');
        expect(() => movieTheater.moneySpent(12, {}, ['soda', 'juice'])).to.throw('Invalid input');
        expect(() => movieTheater.moneySpent(12, ['chips', 'banana'], null)).to.throw('Invalid input');
        expect(() => movieTheater.moneySpent([], 'str', 12)).to.throw('Invalid input');
        expect(() => movieTheater.moneySpent([], [], [])).to.throw('Invalid input');
        expect(() => movieTheater.moneySpent({}, {}, {})).to.throw('Invalid input');
        expect(() => movieTheater.moneySpent(12, 12, 12)).to.throw('Invalid input');
        expect(() => movieTheater.moneySpent('str', 'str', 'str')).to.throw('Invalid input');
    })
    it('test for discount', () => {
        expect(movieTheater.moneySpent(3, ['Popcorn', 'Nachos'], ['Soda', 'Water'])).to.be.equal(
            'The total cost for the purchase with applied discount is 47.60')
        expect(movieTheater.moneySpent(3, ['Nachos'], ['Soda', 'Water'])).to.be.equal(
            'The total cost for the purchase with applied discount is 44.00')
    })
    it('test without discount', () => {
        expect(movieTheater.moneySpent(2, ['Popcorn', 'Nachos'], ['Soda', 'Water'])).to.be.equal(
            'The total cost for the purchase is 44.50')
        expect(movieTheater.moneySpent(2, ['Nachos'], ['Soda', 'Water'])).to.be.equal(
            'The total cost for the purchase is 40.00')
    })

})
describe('test reservation func', () => {
    it('test valid inputs of reservation func', () => {
        expect(() => movieTheater.reservation([], 5)).to.not.throw('Invalid input');
        expect(() => movieTheater.reservation([], -5)).to.not.throw('Invalid input');
        expect(() => movieTheater.reservation([], 0)).to.not.throw('Invalid input');
        expect(() => movieTheater.reservation([{ rowNumber: 2, freeSeats: 5 }], 5)).to.not.throw('Invalid input');
    })
    it('test inValid inputs of reservation func', () => {
        expect(() => movieTheater.reservation(12, [])).to.throw('Invalid input');
        expect(() => movieTheater.reservation(12, 12)).to.throw('Invalid input');
        expect(() => movieTheater.reservation([], [])).to.throw('Invalid input');
        expect(() => movieTheater.reservation({}, {})).to.throw('Invalid input');
        expect(() => movieTheater.reservation(null, null)).to.throw('Invalid input');
        expect(() => movieTheater.reservation('str', 'str')).to.throw('Invalid input');
    })
    it('test return reservation func', () => {
        expect(movieTheater.reservation([{ rowNumber: 2, freeSeats: 5 },{ rowNumber: 5, freeSeats: 8 }], 5)).to.be.equal(5)
        expect(movieTheater.reservation([{ rowNumber: 2, freeSeats: 5 },{ rowNumber: 1, freeSeats: 8 }], 5)).to.be.equal(2)
        expect(movieTheater.reservation([{ rowNumber: 0, freeSeats: 12 },{ rowNumber: 1, freeSeats: 8 }], 10)).to.be.equal(0)
        expect(movieTheater.reservation([{ rowNumber: 0, freeSeats: 12 },{ rowNumber: 1, freeSeats: 8 }], 15)).to.be.equal(-Infinity)
        expect(movieTheater.reservation([{ rowNumber: 0, freeSeats: 12 },{ rowNumber: 1, freeSeats: 8 }], -15)).to.be.equal(1)
        expect(movieTheater.reservation([{ rowNumber: 0, freeSeats: 12 },{ rowNumber: 1, freeSeats: -8 }], -15)).to.be.equal(1)
        expect(movieTheater.reservation([{ rowNumber: 0, freeSeats: 12 },{ rowNumber: 1, freeSeats: -8 }], 5)).to.be.equal(0)
    })
})