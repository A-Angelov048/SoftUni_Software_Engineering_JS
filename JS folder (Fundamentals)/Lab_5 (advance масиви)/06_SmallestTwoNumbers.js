function smallestTwoNumbers(arr) {

    let sortArr = arr.sort((a, b) => a - b).slice(0 , 2);
    console.log(sortArr.join(' '));

}

smallestTwoNumbers([30, 15, 50, 5])