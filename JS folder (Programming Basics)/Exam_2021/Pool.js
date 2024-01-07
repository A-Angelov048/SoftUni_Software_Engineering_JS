function pool(input){

    let numbPeople = Number(input[0]);
    let priceEnter = Number(input[1]);
    let pricePerSunBed = Number(input[2]);
    let pricePerUmbrella = Number(input[3]);

    let finalPriceEnter = numbPeople * priceEnter;
    let finalPriceUmbrella = Math.ceil(numbPeople / 2) * pricePerUmbrella;
    let finalPriceSunBed = Math.ceil(numbPeople * 0.75) * pricePerSunBed;

    let finalPrice = finalPriceEnter + finalPriceUmbrella + finalPriceSunBed;

    console.log(`${finalPrice.toFixed(2)} lv.`);

}

pool (["21",
"5.50",
"4.40",
"6.20"]);
