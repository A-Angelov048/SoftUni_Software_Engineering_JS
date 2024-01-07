function sumEvenNumbers(input) {

    let sum = 0;

    for (let i = 0; i < input.length; i++) {

        let toNumb = Number(input[i]);

        if(toNumb % 2 === 0){
            sum += toNumb;
        }
    }
console.log(sum);
}

sumEvenNumbers(['1', '2', '3', '4', '5', '6']);
console.log('---------');
sumEvenNumbers(['3','5','7','9']);
console.log('---------');
sumEvenNumbers(['2','4','6','8','10']);
console.log('---------');


function sumEvenNumbers(input) {

    let sum = 0;

    for (let i = 0; i < input.length; i++) {
        input[i] = +input[i]; // + === Number;
    }

    for (let num of input) {
        if (num % 2 === 0) {
            sum += num;
        }
    }
    console.log(sum);
}

sumEvenNumbers(['1', '2', '3', '4', '5', '6']);

