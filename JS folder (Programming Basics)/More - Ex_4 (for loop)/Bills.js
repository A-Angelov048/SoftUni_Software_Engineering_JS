function bills(input){

    let numbMonth = Number(input[0]);
    
    let priceElectricity = 0;
    let priceWater = 0;
    let priceInternet = 0;

    for (let i = 1; i <= numbMonth; i++){

        let electricity = Number(input[i]);

        priceElectricity += electricity;
        priceWater += 20;
        priceInternet += 15;
    }

    let priceOthers = (priceElectricity + priceWater + priceInternet) * 1.2

    let averagePricePerMonth = (priceElectricity + priceWater + priceInternet + priceOthers) / numbMonth;

    console.log(`Electricity: ${priceElectricity.toFixed(2)} lv`);
    console.log(`Water: ${priceWater.toFixed(2)} lv`);
    console.log(`Internet: ${priceInternet.toFixed(2)} lv`);
    console.log(`Other: ${priceOthers.toFixed(2)} lv`);
    console.log(`Average: ${averagePricePerMonth.toFixed(2)} lv`);

}

bills(["5", "68.63", "89.25", "132.53", "93.53", "63.22"]);