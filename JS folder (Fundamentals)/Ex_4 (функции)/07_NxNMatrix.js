function matrix(input){

    let arr = '';

    for (let i = 1; i <= input; i++){

        for (let j = 1; j <= input; j++){
            arr += input + ' ';
        }
        arr += '\n'
    }
    return arr;
}

console.log(matrix(3));
