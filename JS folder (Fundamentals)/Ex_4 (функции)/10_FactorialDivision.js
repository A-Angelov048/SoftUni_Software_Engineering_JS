function factorialDivision(numb1, numb2) {

    let resultNumb1 = 1;
    let resultNumb2 = 1;

    for (let i = 1; i <= numb1; i++) {

        resultNumb1 *= i;
    }

    for (let j = 1; j <= numb2; j++) {

        resultNumb2 *= j;
    }
    
    return print(resultNumb1, resultNumb2 );

    function print(a, b){
        let sum = a / b;
        console.log(sum.toFixed(2)); 
    }
}

factorialDivision(5, 2);
