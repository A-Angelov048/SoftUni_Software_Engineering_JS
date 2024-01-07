let expect = require('chai').expect;
let { chooseYourCar } = require('./chooseYourCar.js');

describe('test choosingType func', () => {
    it('test inValid inputs', () => {
        expect(() => chooseYourCar.choosingType('golf', 'blue', 1899)).to.throw('Invalid Year!');
        expect(() => chooseYourCar.choosingType('golf', 'blue', -1899)).to.throw('Invalid Year!');
        expect(() => chooseYourCar.choosingType('golf', 'blue', 2023)).to.throw('Invalid Year!');
        expect(() => chooseYourCar.choosingType('golf', 'blue', -2023)).to.throw('Invalid Year!');
        expect(() => chooseYourCar.choosingType('golf', 'blue', 2022)).to.throw('This type of car is not what you are looking for.');
        expect(() => chooseYourCar.choosingType([], 'blue', 2022)).to.throw('This type of car is not what you are looking for.');
        expect(() => chooseYourCar.choosingType(12, 'blue', 2022)).to.throw('This type of car is not what you are looking for.');
        expect(() => chooseYourCar.choosingType({}, 'blue', 2022)).to.throw('This type of car is not what you are looking for.');
        expect(() => chooseYourCar.choosingType(null, 'blue', 2022)).to.throw('This type of car is not what you are looking for.');
        expect(() => chooseYourCar.choosingType('', 'blue', 2022)).to.throw('This type of car is not what you are looking for.');
        expect(() => chooseYourCar.choosingType({ name: ['Sedan'] }, 'blue', 2022)).to.throw('This type of car is not what you are looking for.');
    })
    it('test with valid inputs', () => {
        expect(() => chooseYourCar.choosingType('Sedan', 'blue', 1900)).to.not.throw('Invalid Year!');
        expect(() => chooseYourCar.choosingType('Sedan', 'blue', 2001)).to.not.throw('Invalid Year!');
        expect(() => chooseYourCar.choosingType('Sedan', 'blue', 2022)).to.not.throw('Invalid Year!');
        expect(() => chooseYourCar.choosingType(['Sedan'], 'blue', 2022)).to.not.throw('This type of car is not what you are looking for.');
        expect(() => chooseYourCar.choosingType('Sedan', 'blue', 2022)).to.not.throw('This type of car is not what you are looking for.');
        expect(chooseYourCar.choosingType('Sedan', 'blue', 2010)).to.be.equal('This blue Sedan meets the requirements, that you have.');
        expect(chooseYourCar.choosingType('Sedan', 'blue', 2020)).to.be.equal('This blue Sedan meets the requirements, that you have.');
        expect(chooseYourCar.choosingType('Sedan', 'blue', 2009)).to.be.equal('This Sedan is too old for you, especially with that blue color.');
        expect(chooseYourCar.choosingType('Sedan', 'blue', 2000)).to.be.equal('This Sedan is too old for you, especially with that blue color.');
        expect(chooseYourCar.choosingType('Sedan', 'blue', 1900)).to.be.equal('This Sedan is too old for you, especially with that blue color.');
    })
})

describe('test brandName', () => {
    it('test for inValid inputs', () => {
        expect(() => chooseYourCar.brandName(['golf', 'seat', 'benz', 'BMW'], 12)).to.throw('Invalid Information!');
        expect(() => chooseYourCar.brandName(['golf', 'seat', 'benz', 'BMW'], -1)).to.throw('Invalid Information!');
        expect(() => chooseYourCar.brandName(['golf', 'seat', 'benz', 'BMW'], 12.5)).to.throw('Invalid Information!');
        expect(() => chooseYourCar.brandName(['golf', 'seat', 'benz', 'BMW'], '12.5321')).to.throw('Invalid Information!');
        expect(() => chooseYourCar.brandName(['golf', 'seat', 'benz', 'BMW'], [])).to.throw('Invalid Information!');
        expect(() => chooseYourCar.brandName(['golf', 'seat', 'benz', 'BMW'], -12.5321)).to.throw('Invalid Information!');
        expect(() => chooseYourCar.brandName('str', 'str')).to.throw('Invalid Information!');
        expect(() => chooseYourCar.brandName([], [])).to.throw('Invalid Information!');
        expect(() => chooseYourCar.brandName({}, {})).to.throw('Invalid Information!');
        expect(() => chooseYourCar.brandName(null, null)).to.throw('Invalid Information!');
    })
    it('test for valid inputs', () => {
        expect(() => chooseYourCar.brandName(['golf', 'seat', 'benz', 'BMW'], 3)).to.not.throw('Invalid Information');
        expect(() => chooseYourCar.brandName(['golf', 'seat', 'benz', 'BMW'], 0)).to.not.throw('Invalid Information');
        expect(chooseYourCar.brandName(['golf', 'seat', 'benz', 'BMW'], 3)).to.be.equal('golf, seat, benz');
        expect(chooseYourCar.brandName(['golf', 'seat', 'benz', 'BMW'], 1)).to.be.equal('golf, benz, BMW');
        expect(chooseYourCar.brandName(['golf', 'seat', 'benz', 'BMW'], 0)).to.be.equal('seat, benz, BMW');
    })
})

describe('test carFuelConsumption func', () => {
    it('test for inValid inputs', () => {
        expect(() => chooseYourCar.carFuelConsumption([], 12)).to.throw('Invalid Information!');
        expect(() => chooseYourCar.carFuelConsumption('pesho', 12)).to.throw('Invalid Information!');
        expect(() => chooseYourCar.carFuelConsumption(12, [])).to.throw('Invalid Information!');
        expect(() => chooseYourCar.carFuelConsumption(12, 'pesho')).to.throw('Invalid Information!');
        expect(() => chooseYourCar.carFuelConsumption([], [])).to.throw('Invalid Information!');
        expect(() => chooseYourCar.carFuelConsumption({}, {})).to.throw('Invalid Information!');
        expect(() => chooseYourCar.carFuelConsumption('str', 'str')).to.throw('Invalid Information!');
        expect(() => chooseYourCar.carFuelConsumption(-1, 12)).to.throw('Invalid Information!');
        expect(() => chooseYourCar.carFuelConsumption(12, -1)).to.throw('Invalid Information!');
        expect(() => chooseYourCar.carFuelConsumption(-12, -1)).to.throw('Invalid Information!');
        expect(() => chooseYourCar.carFuelConsumption(0, 0)).to.throw('Invalid Information!');
    })
    it('test for valid inputs', () => {
        expect(() => chooseYourCar.carFuelConsumption(100, 12)).to.not.throw('Invalid Information!')
        expect(chooseYourCar.carFuelConsumption(100, 12)).to.be.equal('The car burns too much fuel - 12.00 liters!');
        expect(chooseYourCar.carFuelConsumption(200, 21)).to.be.equal('The car burns too much fuel - 10.50 liters!');
        expect(chooseYourCar.carFuelConsumption(100, 12.5)).to.be.equal('The car burns too much fuel - 12.50 liters!');
        expect(chooseYourCar.carFuelConsumption(10, 120)).to.be.equal('The car burns too much fuel - 1200.00 liters!');
        expect(chooseYourCar.carFuelConsumption(10, 120.5)).to.be.equal('The car burns too much fuel - 1205.00 liters!');
        expect(chooseYourCar.carFuelConsumption(1, 1)).to.be.equal('The car burns too much fuel - 100.00 liters!');
        expect(chooseYourCar.carFuelConsumption(1000, 12)).to.be.equal('The car is efficient enough, it burns 1.20 liters/100 km.');
        expect(chooseYourCar.carFuelConsumption(1000, 12.5)).to.be.equal('The car is efficient enough, it burns 1.25 liters/100 km.');
        expect(chooseYourCar.carFuelConsumption(1000.50, 12)).to.be.equal('The car is efficient enough, it burns 1.20 liters/100 km.');
        expect(chooseYourCar.carFuelConsumption(100, 7)).to.be.equal('The car is efficient enough, it burns 7.00 liters/100 km.');
    })
})

