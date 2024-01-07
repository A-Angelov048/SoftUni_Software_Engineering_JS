function club(input) {

    let i = 0;

    let neededMoney = Number(input[i]);
    i++;
    let command = input[i];
    i++;
    let numbOrderCocktails = Number(input[i]);
    i++;

    let earnedMoney = 0;

    

    while (command !== "Party!") {

        let priceCocktail = command.length;
        priceCocktail *= numbOrderCocktails;

        if (priceCocktail % 2 === 1) {
            priceCocktail *= 0.75;
            earnedMoney += priceCocktail;
        } else {
            earnedMoney += priceCocktail;
        }

        if (earnedMoney >= neededMoney) {
            console.log("Target acquired.");
            console.log(`Club income - ${earnedMoney.toFixed(2)} leva.`);
            return;
        }

        command = input[i];
        i++;
        numbOrderCocktails = Number(input[i]);
        i++;

    }

    neededMoney -= earnedMoney;

    console.log(`We need ${neededMoney.toFixed(2)} leva more.`);
    console.log(`Club income - ${earnedMoney.toFixed(2)} leva.`);

}

club(["100",
"Sidecar",
"7",
"Mojito",
"5",
"White Russian",
"10"])

