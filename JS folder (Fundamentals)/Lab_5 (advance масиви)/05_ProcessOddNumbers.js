function processOddNumbers(arr) {

    let arrLength = arr.length;
    let newArr = [];

    for (let i = 0; i < arrLength; i++) {

        if (i % 2 === 1) {

            newArr.push(arr[i] * 2);
        }
    }
    console.log(newArr.reverse().join(' '));
}

processOddNumbers([10, 15, 20, 25]);



function processOddNumbers(arr) {

    let oddPositionI = arr.filter(i => i % 2 === 1);
    let sumOddPositionI = oddPositionI.map(numb => numb * 2);

    console.log(sumOddPositionI.reverse().join(' '));
}



