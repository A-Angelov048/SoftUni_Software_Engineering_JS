function amazingNumbers(input) {

    input = String(input);
    let sum = 0;

    for (let i = 0; i < input.length; i++) {

        sum += Number(input[i]);
    }

    let result = String(sum).includes('9') ? 'True' : 'False';

    console.log(`${input} Amazing? ${result}`);
}

amazingNumbers(1233);
amazingNumbers(999);