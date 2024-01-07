function division(numb) {

    let result = '';

    if (numb % 10 === 0) {
        result = 'The number is divisible by 10';
    } else if (numb % 7 === 0) {
        result = 'The number is divisible by 7';
    } else if (numb % 6 === 0) {
        result = 'The number is divisible by 6';
    } else if (numb % 3 === 0) {
        result = 'The number is divisible by 3';
    } else if (numb % 2 === 0) {
        result = 'The number is divisible by 2';
    } else {
        result = 'Not divisible';
    }
    console.log(result);
}

division(30);
division(15);
division(12);
division(1643);