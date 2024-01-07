function triangleOfNumbers(numb){

    let result = '';

    for (let i = 1; i <= numb; i++){
        for (let n = 1; n <= i; n++){
            result += `${i} `
        }
        result += '\n';
    }
console.log(result);
}

triangleOfNumbers(3);
triangleOfNumbers(5);
triangleOfNumbers(6);