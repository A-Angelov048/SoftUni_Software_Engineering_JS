function degrees(input){

    let calcDegrees = Number(input[0]) * 1.8 + 32;
    calcDegrees = calcDegrees.toFixed(2);
    
    console.log(calcDegrees);

}

degrees(["25"]);