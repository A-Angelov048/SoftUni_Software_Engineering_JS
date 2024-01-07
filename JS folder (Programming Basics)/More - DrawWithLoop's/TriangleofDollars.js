function triangleOfDollars(input) {

    let dollars = Number(input[0]);
    let digit = '$';

    for (let i = 1; i < dollars; i++) {
        digit += '\n';

        for (let j = 0; j <= i; j++) {
            digit += "$" + ' ';
        }
    }
console.log(digit);
}

triangleOfDollars(['5']);