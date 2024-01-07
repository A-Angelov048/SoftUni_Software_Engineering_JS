function shop(input){

    let petersBudget = Number(input[0]);
    let numbVideoCard = Number(input[1]);
    let numbProcessor = Number(input[2]);
    let numbRamMemory = Number(input[3]);

    let priceOfVideoCard = numbVideoCard * 250;

    let priceOfProcessor = 0.35 * priceOfVideoCard;
    priceOfProcessor = numbProcessor * priceOfProcessor;

    let priceofRamMemory = 0.10 * priceOfVideoCard;
    priceofRamMemory = numbRamMemory * priceofRamMemory

    let finalPrice = priceOfVideoCard + priceOfProcessor + priceofRamMemory;

    if (numbVideoCard > numbProcessor){
        finalPrice = 0.85 * finalPrice;
    }

    if (petersBudget >= finalPrice){
        let overage = petersBudget - finalPrice;
        console.log(`You have ${overage.toFixed(2)} leva left!`);

    } else {
        let overBudget = finalPrice - petersBudget;
        console.log(`Not enough money! You need ${overBudget.toFixed(2)} leva more!`);
    }


}

shop (["900", "2", "1", "3"]);