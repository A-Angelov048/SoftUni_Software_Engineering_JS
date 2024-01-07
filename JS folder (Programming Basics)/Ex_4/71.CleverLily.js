function cleverLily(input){

    let ageOfLily = Number(input[0]);
    let priceOfDishwasher = Number(input[1]);
    let pricePerToy = Number(input[2]);

    let totalMoneyWon = 0;
    let evenAgeMoney = 10;


    for(i = 1; i <= ageOfLily; i++){

        if(i % 2 === 0){
            totalMoneyWon += evenAgeMoney;
            totalMoneyWon -= 1
            evenAgeMoney += 10;
            
        } else {
            totalMoneyWon += pricePerToy
        }
    }

    if (totalMoneyWon >= priceOfDishwasher){
        let leftMoney = totalMoneyWon - priceOfDishwasher;
        console.log(`Yes! ${leftMoney.toFixed(2)}`);
    } else {
        let neededMoney = priceOfDishwasher - totalMoneyWon;
        console.log(`No! ${neededMoney.toFixed(2)}`);
    }
}

cleverLily(["10", "170.00", "6"]);