function sortNumbers(firstN, secondN, thirdN) {

    numbers = [firstN, secondN, thirdN];
    numbers.sort((a, b) => b - a);

    console.log(numbers);
    // for (let i = 0; i <= 2; i++){
    //     console.log(numbers[i]);
    // }
}

sortNumbers(2, 1, 3);
sortNumbers(3, 1, -2);
sortNumbers(0, 0, 2);