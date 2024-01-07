function negativeOrPositiveNumbers(arr) {

    let arrlength = arr.length;
    let newArr = [];

    for (let i = 0; i < arrlength; i++) {

        let currentNumb = Number(arr[i]);

        if (currentNumb < 0) {
            newArr.unshift(arr[i]);
        } else {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr.join('\n'));
}

negativeOrPositiveNumbers(['7', '-2', '8', '9']);