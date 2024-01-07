function simpleCalculator(numOne, numTwo, operator) {

    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;

    switch (operator) {

        case 'multiply': return multiply(numOne, numTwo);
        case 'divide': return divide(numOne, numTwo);
        case 'add': return add(numOne, numTwo);
        case 'subtract': return subtract(numOne, numTwo);
    }
}

console.log(simpleCalculator(5, 5, 'multiply'));
