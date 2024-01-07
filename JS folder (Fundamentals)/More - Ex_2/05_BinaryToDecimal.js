function decimal(input) {

    let inputLength = input.length - 1;
    let sum = 0;

    for (let i = 0; i < input.length; i++) {

        sum += Number(input[i] * Math.pow(2, inputLength));
        inputLength--
    }

    console.log(sum);
}

decimal('00001001');
console.log('-------');
decimal('11110000');
console.log('-------');



function solve(binary) {

    let decimalNumber = parseInt(binary, 2);
    console.log(decimalNumber);
}

solve('00001001');