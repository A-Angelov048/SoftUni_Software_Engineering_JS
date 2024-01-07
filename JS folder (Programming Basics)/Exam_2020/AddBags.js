function bags(input){

    let priceOfBagOver20kg = Number(input[0]);
    let kgBag = Number(input[1]);
    let daysToFly = Number(input[2]);
    let numbBags = Number(input[3]);

    if (kgBag < 10){
        priceOfBagOver20kg *= 0.2;
    } else if (kgBag <= 20){
        priceOfBagOver20kg *= 0.5;
    } else {
        priceOfBagOver20kg
    }

    if (daysToFly < 7){
        priceOfBagOver20kg *= 1.4;
    } else if (daysToFly <= 30){
        priceOfBagOver20kg *= 1.15;
    } else {
        priceOfBagOver20kg *= 1.1 
    }

    priceOfBagOver20kg *= numbBags;

    console.log(`The total price of bags is: ${priceOfBagOver20kg.toFixed(2)} lv.`);

}

bags (["30", "18", "6", "2"])