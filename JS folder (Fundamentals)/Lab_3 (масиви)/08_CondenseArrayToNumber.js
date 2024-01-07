function condenseArray(input) {

    let condensed = [];

    while (input.length !== 1) {

        for (let i = 0; i < input.length - 1; i++) {
            condensed.push(input[i] + input[i + 1])
            // condensed[i] = input[i] + input[i + 1]
        }

        input = condensed;
        condensed = [];
    }
    console.log(input[0]);
}

condenseArray([2, 10, 3]);
console.log('----------');
condenseArray([5, 0, 4, 1, 2]);
console.log('----------');
condenseArray([1]);
console.log('----------');