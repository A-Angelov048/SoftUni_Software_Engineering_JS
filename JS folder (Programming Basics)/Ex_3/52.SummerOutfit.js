function outfit (input){

    let temperature = Number(input[0]);
    let dayNight = input[1];

    let out = " ";
    let shoes = " ";

    if (dayNight === "Morning"){
         
        if (temperature >= 10 && temperature <= 18) {
        out = "Sweatshirt";
        shoes = "Sneakers";
        } else if (temperature > 18 && temperature <= 24){
            out = "Shirt";
            shoes = "Moccasins";
        } else {
            out = "T-Shirt";
            shoes = "Sandals";
        }

    } else if (dayNight === "Afternoon"){
        if (temperature >= 10 && temperature <= 18) {
            out = "Shirt";
            shoes = "Moccasins";
        } else if (temperature > 18 && temperature <= 24){
            out = "T-Shirt";
            shoes = "Sandals";
        } else {
            out = "Swim Suit";
            shoes = "Barefoot";
        }
    } else {
        if (dayNight === "Evening") {
            out = "Shirt";
            shoes = "Moccasins";
        }
    }
    
    console.log(`It's ${temperature} degrees, get your ${out} and ${shoes}.`);
}

outfit (["26", "Morning"]);