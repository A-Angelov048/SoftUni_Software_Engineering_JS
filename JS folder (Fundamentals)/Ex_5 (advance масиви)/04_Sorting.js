function sorting(arr) {

    let newArr = [];
    let arrLength = arr.length;
    let sortArr = arr.sort((a, b) => b - a);

    for (let i = 0; i < arrLength / 2; i++) {

        let curentNumb = sortArr[i];
        newArr.push(curentNumb);

        if (i !== (arrLength - 1) - i) {
            let lastNumb = sortArr[(arrLength - 1) - i]
            newArr.push(lastNumb);
        }

    }
    console.log(newArr.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94, 5])