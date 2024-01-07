function dayOfWeek(input) {

    let arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let result = arr[input - 1];

    if (result) {
        console.log(result);
    } else {
        console.log('Invalid day!');
    }
}

dayOfWeek(3);
console.log('-------');
dayOfWeek(6);
console.log('-------');
dayOfWeek(11);
console.log('-------');