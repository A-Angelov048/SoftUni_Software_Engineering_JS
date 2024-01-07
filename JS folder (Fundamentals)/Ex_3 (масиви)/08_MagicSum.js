function magicSum(arr, equal) {

    let arrLength = arr.length;
    let sum = 0;
    let result = '';

    for (let i = 0; i < arrLength; i++) {

        let currentNumb = arr[i];

        for (let j = i + 1; j < arrLength; j++) {

            let nextNumb = arr[j];
            sum = currentNumb + nextNumb;

            if (sum === equal) {
                result += `${currentNumb} ${nextNumb}` + '\n';
            }
        }
    }
    console.log(result);
}

magicSum([1, 7, 6, 2, 19, 23], 8);
console.log('---------');
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
console.log('---------');
magicSum([1, 2, 3, 4, 5, 6], 6);
console.log('---------');