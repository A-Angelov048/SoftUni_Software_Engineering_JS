function repeatString(str, repeat) {

    let result = '';

    for (let i = 1; i <= repeat; i++){

        result += str + '';
    }
    return result;
}

console.log(repeatString('abc', 3));