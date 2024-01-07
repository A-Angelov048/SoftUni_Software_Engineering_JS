function sumInteger(numbOne, numbTwo, numbThree) {

    let sum = numbOne + numbTwo;
    return subtractInteger(sum, numbThree);

    function subtractInteger(a, b) {

        let subtract = a - b;
        return subtract;
    }
}

console.log(sumInteger(23, 6, 10));
console.log('--------');
console.log(sumInteger(1, 17, 30));
console.log('--------');
console.log(sumInteger(42, 58, 100));
console.log('--------');