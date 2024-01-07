function calc(input){

    let numbOfPeople = Number(input[0]);
    let season = input[1];
    let finalPrice = 0;

    switch(season){
        
        case "spring": 
            if (numbOfPeople <= 5){
                finalPrice = numbOfPeople *= 50;
            } else {
                finalPrice = numbOfPeople *= 48;
            }
        break;

        case "summer": 
            if (numbOfPeople <= 5){
                finalPrice = numbOfPeople *= 48.50;
                finalPrice *= 0.85;
            } else {
                finalPrice = numbOfPeople *= 45;
                finalPrice *= 0.85;
            }
        break;

        case "autumn": 
            if (numbOfPeople <= 5){
                finalPrice = numbOfPeople *= 60;
            } else {
                finalPrice = numbOfPeople *= 49.50;
            }
        break;

        case "winter": 
            if (numbOfPeople <= 5){
                finalPrice = numbOfPeople *= 86;
                finalPrice *= 1.08;
            } else {
                finalPrice = numbOfPeople *= 85;
                finalPrice *= 1.08;
            }
        break;
    }

    console.log(`${finalPrice.toFixed(2)} leva.`);
}

calc(["20", "winter"]);