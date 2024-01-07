function safari(input){

    let budget = Number(input[0]);
    let neededGas = Number(input[1]);
    let dayOfTheWeek = input[2];

    let priceSafari = 100;
    let priceGas = neededGas * 2.1;

    let finalPrice = priceSafari + priceGas;

    switch(dayOfTheWeek){
        case "Saturday": finalPrice *= 0.9; break;
        case "Sunday": finalPrice *= 0.8; break;
    }
    
    if(budget >= finalPrice){
        let moneyLeft = budget - finalPrice;
        console.log(`Safari time! Money left: ${moneyLeft.toFixed(2)} lv.`);
    } else {
        let moneyNeeded = finalPrice - budget;
        console.log(`Not enough money! Money needed: ${moneyNeeded.toFixed(2)} lv.`);
    }

}

safari (["120",
"30",
"Saturday"])
