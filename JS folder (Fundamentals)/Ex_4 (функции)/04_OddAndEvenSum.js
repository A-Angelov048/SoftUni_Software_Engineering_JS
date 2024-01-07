function OddAndEvenSum(number) {

    let toStrNumb = number.toString();
    let lengthNumb = toStrNumb.length;

    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 0; i < lengthNumb; i++) {

        let currentNumb = Number(toStrNumb[i]);

        if (currentNumb % 2 === 0) {
            sumEven += currentNumb;
        } else {
            sumOdd += currentNumb;
        }
    }

    return `Odd sum = ${sumOdd}, Even sum = ${sumEven}`;
}

console.log(OddAndEvenSum(1000435));