function equalArrays(input1, input2) {

    let sum = 0;
    let flag = false;
    let index = 0

    for (let i = 0; i < input1.length; i++) {
        sum += +input1[i];
    }

    for (let j = 0; j < input1.length; j++) {

        if (input1[j] !== input2[j]) {
            flag = true;
            index = j;
            break;
        }
    }

    if (flag) {
        console.log(`Arrays are not identical. Found difference at ${index} index`);
    } else {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

equalArrays(['10', '20', '30'], ['10', '20', '30']);
console.log('---------');
equalArrays(['1','2','3','4','5'], ['1','2','4','4','5']);
console.log('---------');
equalArrays(['1'], ['10']);
console.log('---------');