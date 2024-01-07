function arrayManipulations(arr) {

    let arrLength = arr.length;
    let newArr = arr.slice(0, 1).join('').split(' ');

    for (let i = 1; i < arrLength; i++) {

        let currentDigit = arr[i].split(' ')

        switch (currentDigit[0]) {

            case 'Add': newArr.push(currentDigit[1]); break;
            case 'Remove': newArr = newArr.filter(i => i !== currentDigit[1]); break;
            case 'RemoveAt': newArr.splice(currentDigit[1], 1); break;
            case 'Insert': newArr.splice(currentDigit[2], 0, currentDigit[1]); break;
        }
    }
    console.log(newArr.join(' '));
}

arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'])

console.log('--------');

arrayManipulations(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2'])

console.log('--------');