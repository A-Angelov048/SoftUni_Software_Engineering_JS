function simpleMath(input){

    let radians = Number(input[0]);
    let degrees = radians * 180 / Math.PI;

    console.log(degrees);

}

simpleMath(["3.1416"]);