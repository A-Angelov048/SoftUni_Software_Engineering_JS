function sortingNumbers(data) {

    let dataLength = data.length;
    let newArr = [];
    data.sort((a, b) => a - b)

    for (let i = 0; i < dataLength; i += 2) {

        let firstChar = data.shift();
        let lastChar = data.pop();
        newArr.push(firstChar, lastChar);
    }

    return newArr;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
