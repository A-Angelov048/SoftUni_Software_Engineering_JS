class Hex {
    constructor(value) {
        this.value = Number(value);
    }
    valueOf() {
        return this.value;
    }
    toString() {
        return `0x${this.value.toString(16).toUpperCase()}`;
    }
    plus(b) {
        return new Hex(`0x${(this.value + b).toString(16)}`)

    }
    minus(b) {
        return new Hex(`0x${(this.value - b).toString(16)}`)
    }
    parse(parsedValue) {
        return parseInt(parsedValue, 16);
    }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');
console.log(FF.parse('AAA'));



