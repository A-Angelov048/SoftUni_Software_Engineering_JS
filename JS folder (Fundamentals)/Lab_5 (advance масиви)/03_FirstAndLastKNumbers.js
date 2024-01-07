function firstAndLastKNumbers(arr) {

    let kNumb = arr[0];

    let firstK = arr.slice(1, kNumb + 1)
    let lastK = arr.slice(-kNumb);

    console.log(firstK.join(' '));
    console.log(lastK.join(' '));

}

firstAndLastKNumbers([2, 7, 8, 9]);
console.log('----------');
firstAndLastKNumbers([3, 6, 7, 8, 9]);
console.log('----------');