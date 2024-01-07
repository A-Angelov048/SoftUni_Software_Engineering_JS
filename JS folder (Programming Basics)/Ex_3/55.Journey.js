function journey(input){

    let budget = Number(input[0]);
    let season = input[1];

    let destination = " ";
    let rest = " ";

    if ( budget <= 100){
        destination = "Bulgaria";
            if (season === "summer"){
                budget *= 0.3;
                rest = "Camp";
            } else if (season === "winter"){
                budget *= 0.7;
                rest = "Hotel";
            }
    } else if ( budget <= 1000){
        destination = "Balkans";
            if (season === "summer"){
                budget *= 0.4;
                rest = "Camp";
            } else if (season === "winter"){
                budget *= 0.8;
                rest = "Hotel";
            }
    } else {
        destination = "Europe";
        budget *= 0.9;
        rest = "Hotel";
    }

console.log(`Somewhere in ${destination}`);
console.log(`${rest} - ${budget.toFixed(2)}`);
}

journey(["100", "summer"]);