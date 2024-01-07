function addAndSubtract(input) {

    let sumFromInput = 0;
    let sumFromModArr = 0;
    let modifiedArr = [];

    for (let i = 0; i < input.length; i++) {

        sumFromInput += input[i];

        if (input[i] % 2 === 0) {
            input[i] += i;

        } else {
            input[i] -= i;

        }

        sumFromModArr += input[i];
        modifiedArr.push(input[i]);

    }
    console.log(modifiedArr);
    console.log(sumFromInput);
    console.log(sumFromModArr);
}

addAndSubtract([5, 15, 23, 56, 35]);