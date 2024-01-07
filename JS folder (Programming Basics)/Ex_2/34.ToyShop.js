function shop(input){

    let priceOfTour = Number(input[0]);
    let numbPuzzles = Number(input[1]);
    let numbDolls = Number(input[2]);
    let numbBears = Number(input[3]);
    let numbMinions = Number(input[4]);
    let numbTrucks = Number(input[5]);

    let finalNumbOfToys = numbPuzzles + numbDolls + numbBears + numbMinions + numbTrucks;
    let finalPriceOfToys = numbPuzzles * 2.60 + numbDolls * 3 + numbBears * 4.10 + numbMinions * 8.20 + numbTrucks *2;

    if (finalNumbOfToys >= 50){
        finalPriceOfToys = 0.75 * finalPriceOfToys;
        rentForShop = 0.10 * finalPriceOfToys;
        moneyWon = finalPriceOfToys - rentForShop;
        finalPrice = moneyWon - priceOfTour;

    } else {
        rentForShop = 0.10 * finalPriceOfToys;
        moneyWon = finalPriceOfToys - rentForShop;
        finalPrice = priceOfTour - moneyWon;
    }

    if (finalPrice >= priceOfTour){
        console.log(`Yes! ${finalPrice.toFixed(2)} lv left.`);

    } else {
        console.log(`Not enough money! ${finalPrice.toFixed(2)} lv needed.`);
    }
}

shop (["1000",
"25",
"25",
"40",
"50",
"12"])


// function shop(input){

//     let priceOfTour = Number(input[0]);
//     let numbPuzzles = Number(input[1]);
//     let numbDolls = Number(input[2]);
//     let numbBears = Number(input[3]);
//     let numbMinions = Number(input[4]);
//     let numbTrucks = Number(input[5]);

//     let finalNumbOfToys = numbPuzzles + numbDolls + numbBears + numbMinions + numbTrucks;
//     let finalPriceOfToys = numbPuzzles * 2.60 + numbDolls * 3 + numbBears * 4.10 + numbMinions * 8.20 + numbTrucks *2;

//     if (finalNumbOfToys >= 50){
//         finalPriceOfToys = 0.75 * finalPriceOfToys;
//     }

//     let moneyWon = finalPriceOfToys;
//     moneyWon = 0.90 * moneyWon

    

//     if (moneyWon >= priceOfTour){
//         let moneyLeft = moneyWon - priceOfTour;
//         console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);

//     } else {
//         let moneyNeeded = priceOfTour - moneyWon;
//         console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
//     }
// }


// shop (["1000",
// "25",
// "25",
// "40",
// "50",
// "12"])




