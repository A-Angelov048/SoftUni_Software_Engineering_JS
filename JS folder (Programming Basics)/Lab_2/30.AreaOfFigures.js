function areaOfFigures(input){

    let nameFigure = input[0];
    let result = 0 
    

    if (nameFigure === "square"){
        let side = Number(input[1]);
        result = side * side;

    } else if (nameFigure === "rectangle"){
        let sideA = Number(input[1]);
        let sideB = Number(input[2]);
        result = sideA * sideB;

    } else if (nameFigure === "circle"){
        let radius = Number(input[1]);
        result = Math.PI * Math.pow(radius,2);

    } else if (nameFigure === "triangle"){
        let side = Number(input[1]);
        let h = Number(input[2]);
        result = side * h / 2
    }
    
    console.log(result.toFixed(3));
}

areaOfFigures(["square", "5"]);



// function areaOfFigures(input){

//     let nameFigure = input[0];
//     let numb = Number(input[1]);
//     let numb2 = Number(input[2]);
//     let result = 0 
    

//     if (nameFigure === "square"){
//         result = numb * numb;

//     } else if (nameFigure === "rectangle"){
//         result = numb * numb2;

//     } else if (nameFigure === "circle"){
//         result = Math.PI * Math.pow(numb,2);

//     } else if (nameFigure === "triangle"){
//         result = numb * numb2 / 2;
//     }
    
//     console.log(result.toFixed(3));
// }