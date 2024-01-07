// function Converter(input){

//     let usd = Number(input[0]) * 1.79549 + " " + "BGN.";
//     console.log(usd);

// }


// Converter(["22"])




function Converter(input){

    let usd = Number(input[0]);
    let bgn = usd * 1.79549;

    console.log(bgn);

}

Converter(["100"]);