function numbers(arr) {

    let toArr = arr.split(' ').map(Number).sort((a, b) => b - a);
    let averageSumArr = toArr.reduce((sumA, sumB) => sumA + sumB) / toArr.length;
    let count = 1;
    let newArr = [];

    for (const i of toArr) {

        if (i > averageSumArr && count <= 5) {
            count++;
            newArr.push(i);
        }
    }
    let result = newArr.length === 0 ? 'No' : newArr.join(' ');
    console.log(result);
}

numbers('10 20 30 40 50');
console.log('----------');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
console.log('----------');
numbers('1');
console.log('----------');
numbers('-1 -2 -3 -4 -5 -6');
console.log('----------');