function sumFirstAndLast(arr) {

    let firstI = Number(arr.pop());
    let lastI = Number(arr.shift());

    console.log(firstI + lastI);

}

sumFirstAndLast(['20', '30', '40']);
