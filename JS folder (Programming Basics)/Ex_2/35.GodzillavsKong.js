function film (input){

    let budgetFilm = Number(input[0]);
    let numbPersons = Number(input[1]);
    let priceOfWestPerOnePerson = Number(input[2]);

    let decor = 0.1 * budgetFilm;
    let priceWest = numbPersons * priceOfWestPerOnePerson
    let moneySpend = 0

    if (numbPersons > 150){
        priceWest = 0.9 * priceWest;
        moneySpend = decor + priceWest;

    } else {
        moneySpend = decor + priceWest;
    }

    if (moneySpend > budgetFilm){
        let neededMoney = moneySpend - budgetFilm;
        console.log("Not enough money!");
        console.log(`Wingard needs ${neededMoney.toFixed(2)} leva more.`);

    } else {
       let moneyLeft = budgetFilm - moneySpend;
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    }


}

film (["9587.88", "222", "55.68"]);

