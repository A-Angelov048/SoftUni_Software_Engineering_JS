function subtraction(input) {

    let sumOdd = 0;
    let sumEven = 0;

// ако масива не е съставен от числа от стринг да се пребърнат към числа чрез променлива. Важни за 1 начин. 
// ако се реши да се използва 2 начин трявбва първо да се направи for loop който да ги парсне към числа!
// 1 начин ако Inputa е съставен само от числа!

    // for (let i = 0; i < input.length; i++) {

    //     if (input[i] % 2 === 0) {
    //         sumEven += input[i];
    //     } else {
    //         sumOdd += input[i];
    //     }
    // }

//2 начин ако Inputa е съставен само от числа!

    for (let num of input) {
        if (num % 2 === 0) {
            sumEven += num;
        } else {
            sumOdd += num;
        }
    }
    console.log(sumEven - sumOdd);
}

subtraction([1, 2, 3, 4, 5, 6]);
console.log('-----------');
subtraction([3, 5, 7, 9]);
console.log('-----------');
subtraction([2, 4, 6, 8, 10]);
console.log('-----------');



