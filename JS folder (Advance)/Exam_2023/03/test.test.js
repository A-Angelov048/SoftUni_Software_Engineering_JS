let expect = require('chai').expect;
let { onlineStore } = require('./onlineStore');

describe('test isProductAvailable func', () => {
    it('test for typeOf inputs', () => {
        expect(() => onlineStore.isProductAvailable(2, 'str')).to.throw('Invalid input.');
        expect(() => onlineStore.isProductAvailable([], [])).to.throw('Invalid input.');
        expect(() => onlineStore.isProductAvailable({}, {})).to.throw('Invalid input.');
        expect(() => onlineStore.isProductAvailable(null, null)).to.throw('Invalid input.');
        expect(() => onlineStore.isProductAvailable(-2, -2)).to.throw('Invalid input.');
        expect(() => onlineStore.isProductAvailable('str', 'str')).to.throw('Invalid input.');
        expect(() => onlineStore.isProductAvailable(['str'], 2)).to.throw('Invalid input.');
    })
    it('test for return', () => {
        expect(onlineStore.isProductAvailable('banana', 5)).to.be.equal(`Great! banana is available for purchase.`);
        expect(onlineStore.isProductAvailable('banana', -1)).to.be.equal(`Sorry, banana is currently out of stock.`);
        expect(onlineStore.isProductAvailable('banana', 0)).to.be.equal(`Sorry, banana is currently out of stock.`);
    })
})
describe('test canAffordProduct func', () => {
    it('test for typeOf inputs', () => {
        expect(() => onlineStore.canAffordProduct(2, 'str')).to.throw('Invalid input.');
        expect(() => onlineStore.canAffordProduct('str', 2)).to.throw('Invalid input.');
        expect(() => onlineStore.canAffordProduct('str', 'str')).to.throw('Invalid input.');
        expect(() => onlineStore.canAffordProduct(['str'], [2])).to.throw('Invalid input.');
        expect(() => onlineStore.canAffordProduct({}, {})).to.throw('Invalid input.');
        expect(() => onlineStore.canAffordProduct(null, null)).to.throw('Invalid input.');
    })
    it('test for return', () => {
        expect(onlineStore.canAffordProduct(5, 10)).to.be.equal(`Product purchased. Your remaining balance is $5.`);
        expect(onlineStore.canAffordProduct(-5, 10)).to.be.equal(`Product purchased. Your remaining balance is $15.`);
        expect(onlineStore.canAffordProduct(10, 10)).to.be.equal(`Product purchased. Your remaining balance is $0.`);
        expect(onlineStore.canAffordProduct(0, 0)).to.be.equal(`Product purchased. Your remaining balance is $0.`);
        expect(onlineStore.canAffordProduct(0, 10)).to.be.equal(`Product purchased. Your remaining balance is $10.`);

        expect(onlineStore.canAffordProduct(1, -10)).to.be.equal(`You don't have sufficient funds to buy this product.`);
        expect(onlineStore.canAffordProduct(1, 0)).to.be.equal(`You don't have sufficient funds to buy this product.`);
        expect(onlineStore.canAffordProduct(100, 50)).to.be.equal(`You don't have sufficient funds to buy this product.`);
    })
})
describe('test getRecommendedProducts func', () => {
    it('test for typeOf inputs', () => {
        expect(() => onlineStore.getRecommendedProducts(2, 'str')).to.throw('Invalid input.');
        expect(() => onlineStore.getRecommendedProducts(['str'], 2)).to.throw('Invalid input.');
        expect(() => onlineStore.getRecommendedProducts([], [])).to.throw('Invalid input.');
        expect(() => onlineStore.getRecommendedProducts({}, {})).to.throw('Invalid input.');
        expect(() => onlineStore.getRecommendedProducts('str', 'str')).to.throw('Invalid input.');
        expect(() => onlineStore.getRecommendedProducts(2, 2)).to.throw('Invalid input.');
        expect(() => onlineStore.getRecommendedProducts(null, null)).to.throw('Invalid input.');
    })
    it('test for return', () => {
        let instance = [{ 'name': 'banana', 'category': 'fruit' }, { 'name': 'apple', 'category': 'fruit' }]
        expect(onlineStore.getRecommendedProducts(instance, 'fruit')).to.be.equal(`Recommended products in the fruit category: banana, apple`);
        expect(onlineStore.getRecommendedProducts(instance, 'vegetables')).to.be.equal(`Sorry, we currently have no recommended products in the vegetables category.`);
    })
})