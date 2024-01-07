let expect = require('chai').expect
const { before } = require('mocha');
let { PaymentPackage } = require('./PaymentPackage');

describe('test constructor', () => {
    it('test constructor _name', () => {
        let instance = new PaymentPackage('Alex', 2);
        expect(instance._name).to.be.equal('Alex')
    })
    it('test constructor _value', () => {
        let instance = new PaymentPackage('Alex', 2);
        expect(instance._value).to.be.equal(2)
    })
    it('test constructor _VAT', () => {
        let instance = new PaymentPackage('Alex', 2);
        expect(instance._VAT).to.be.equal(20)
    })
    it('test constructor _active', () => {
        let instance = new PaymentPackage('Alex', 2);
        expect(instance._active).to.be.equal(true)
    })
})

describe('test for invalid inputs', () => {
    it('test name input', () => {
        expect(() => new PaymentPackage(2, 'Alex')).to.throw('Name must be a non-empty string')
        expect(() => new PaymentPackage(['a','b','c'], 'Alex')).to.throw('Name must be a non-empty string')
        expect(() => new PaymentPackage({}, 'Alex')).to.throw('Name must be a non-empty string')
        expect(() => new PaymentPackage('', 'Alex')).to.throw('Name must be a non-empty string')
        expect(() => new PaymentPackage(true, 'Alex')).to.throw('Name must be a non-empty string')
        expect(() => new PaymentPackage(null, 'Alex')).to.throw('Name must be a non-empty string')
        expect(() => new PaymentPackage('Alexander', 2)).to.not.throw('Name must be a non-empty string')
    })
    it('test value input', () => {
        expect(() => new PaymentPackage('Alex', 'Alex')).to.throw('Value must be a non-negative number')
        expect(() => new PaymentPackage('Alex', [])).to.throw('Value must be a non-negative number')
        expect(() => new PaymentPackage('Alex', {})).to.throw('Value must be a non-negative number')
        expect(() => new PaymentPackage('Alex', true)).to.throw('Value must be a non-negative number')
        expect(() => new PaymentPackage('Alex', null)).to.throw('Value must be a non-negative number')
        expect(() => new PaymentPackage('Alex', -10)).to.throw('Value must be a non-negative number')
        expect(() => new PaymentPackage('Alex', 0)).to.not.throw('Value must be a non-negative number')
        expect(() => new PaymentPackage('Alex', 123)).to.not.throw('Value must be a non-negative number')
    })
    it('test VAT input', () => {
        let instance = new PaymentPackage('Alex', 2);
        expect(() => instance.VAT = 'Alex').to.throw('VAT must be a non-negative number');
        expect(() => instance.VAT = []).to.throw('VAT must be a non-negative number');
        expect(() => instance.VAT = {}).to.throw('VAT must be a non-negative number');
        expect(() => instance.VAT = true).to.throw('VAT must be a non-negative number');
        expect(() => instance.VAT = null).to.throw('VAT must be a non-negative number');
        expect(() => instance.VAT = -10).to.throw('VAT must be a non-negative number');
        expect(() => instance.VAT = 0).to.not.throw('VAT must be a non-negative number');
        expect(() => instance.VAT = 123).to.not.throw('VAT must be a non-negative number');
    })
    it('test active input', () => {
        let instance = new PaymentPackage('Alex', 2);
        expect(() => instance.active = 'Alex').to.throw('Active status must be a boolean');
        expect(() => instance.active = 2).to.throw('Active status must be a boolean');
        expect(() => instance.active = -2).to.throw('Active status must be a boolean');
        expect(() => instance.active = []).to.throw('Active status must be a boolean');
        expect(() => instance.active = {}).to.throw('Active status must be a boolean');
        expect(() => instance.active = null).to.throw('Active status must be a boolean');
        expect(() => instance.active = true).to.not.throw('Active status must be a boolean');
        expect(() => instance.active = false).to.not.throw('Active status must be a boolean');
    })
})

describe('test toString method', () => {

    it('if input is valid', () => {
        let instance = new PaymentPackage('Alex', 2);
        const output = [
            `Package: Alex`,
            `- Value (excl. VAT): 2`,
            `- Value (VAT 20%): 2.4`
        ];
        expect(instance.toString()).to.be.equal(output.join('\n'))
    })
    it('if input is valid && VAT is set to 40', () => {
        let instance = new PaymentPackage('Alex', 2);
        instance.VAT = 40;
        const output = [
            `Package: Alex`,
            `- Value (excl. VAT): 2`,
            `- Value (VAT 40%): 2.8`
        ];
        expect(instance.toString()).to.be.equal(output.join('\n'))
    })
    it('if input is valid && active is set to false', () => {
        let instance = new PaymentPackage('Alex', 2);
        instance.active = false
        const output = [
            `Package: Alex (inactive)`,
            `- Value (excl. VAT): 2`,
            `- Value (VAT 20%): 2.4`
        ];
        expect(instance.toString()).to.be.equal(output.join('\n'))
    })
    it('if input is valid && active is set to false && VAT is set to 50', () => {
        let instance = new PaymentPackage('Alex', 2);
        instance.active = false
        instance.VAT = 40;
        const output = [
            `Package: Alex (inactive)`,
            `- Value (excl. VAT): 2`,
            `- Value (VAT 40%): 2.8`
        ];
        expect(instance.toString()).to.be.equal(output.join('\n'))
    })
})