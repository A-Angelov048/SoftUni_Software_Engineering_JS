function operation(input){

    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator = input[2];

    let result = 0;
    let evenOrOdd = "";

   switch (operator){
        case "+": result = n1 + n2 
            if (result % 2 ===0){
                evenOrOdd = "even";
            } else {
                evenOrOdd = "odd";
            } break;

        case "-": result = n1 - n2 
            if (result % 2 ===0){
                evenOrOdd = "even";
            } else {
                evenOrOdd = "odd";
            } break;

        case "*": result = n1 * n2 
            if (result % 2 ===0){
                evenOrOdd = "even";
            } else {
                evenOrOdd = "odd";
            } break;

        case "/": result = n1 / n2; 
            if (n2 === 0){
                console.log(`Cannot divide ${n1} by zero`);
            } else {
                console.log(`${n1} ${operator} ${n2} = ${result.toFixed(2)}`);
            } break;

        case "%": result = n1 % n2;
            if (n2 === 0){
                console.log(`Cannot divide ${n1} by zero`);
        } else {
            console.log(`${n1} ${operator} ${n2} = ${result}`);
        } break;
   } 

   if (operator === "+" || operator === "-" || operator === "*"){
    console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOrOdd} `);
   } 
}

operation(["112", "0", "/"]);