function perfectNumber(input) {

    let sum = 0;

    for (let i = 1; i <= input; i++) {

        if (input % i === 0) {
            sum += i;

            if (sum === input) {
                return 'We have a perfect number!';
            }
        }
    }

    return "It's not so perfect.";
}

console.log(perfectNumber(6));
console.log('---------');
console.log(perfectNumber(28));
console.log('---------');
console.log(perfectNumber(1236498));
console.log('---------');
