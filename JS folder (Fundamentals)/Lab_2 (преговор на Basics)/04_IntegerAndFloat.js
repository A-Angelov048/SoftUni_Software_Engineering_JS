function integerOrFloat(n1, n2, n3){

    let sum = n1 + n2 + n3;

    let result = sum % 1 === 0 ? 'Integer' : 'Float';

    console.log(`${sum} - ${result}`);

}

integerOrFloat(9, 100, 1.1);
integerOrFloat(100, 200, 303);