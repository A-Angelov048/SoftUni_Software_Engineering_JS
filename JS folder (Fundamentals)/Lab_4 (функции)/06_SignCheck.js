function signCheck(numOne, numTwo, numThree) {

    let arr = [numOne, numTwo, numThree];
    let arrlength = arr.length;
    let result = 1;

    for (let i = 0; i < arrlength; i++) {

        result *= arr[i];
    }

    return print(result);

    function print(numb) {

        if (numb < 0) {
            console.log('Negative');
        } else {
            console.log('Positive');
        }
    }
}

signCheck(5, 12, -15);
console.log('------');
signCheck(-6, -12, 14);
console.log('------');
signCheck(-1, -2, -3);
console.log('------');
signCheck(-5, 1, 1);
console.log('------');

//with arrow function

function signCheck(numOne, numTwo, numThree) {

    let multiply = (a, b, c) => a * b * c;
    let result = multiply(numOne, numTwo, numThree);

    if (result < 0) {
        console.log('Negative');
    } else {
        console.log('Positive');
    }
}

signCheck(5, 12, -15);
console.log('------');
signCheck(-6, -12, 14);
console.log('------');
signCheck(-1, -2, -3);
console.log('------');
signCheck(-5, 1, 1);
console.log('------');