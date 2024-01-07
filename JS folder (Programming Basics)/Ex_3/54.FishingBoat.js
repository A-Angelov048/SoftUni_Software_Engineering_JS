function boat(input){

    let budgetGroup = Number(input[0]);
    let Season = input[1];
    let numbFisherman = Number(input[2]);

    let rentBoatSpring = 3000;
    let rentBoatSummerAutumn = 4200;
    let rentBoatWinter = 2600;
    let rent = 0;

    switch (Season) {
        case "Spring":

            if (numbFisherman <= 6){
                rent = rentBoatSpring * 0.90;
            } else if (numbFisherman >= 7 && numbFisherman <= 11){
                rent = rentBoatSpring * 0.85;
            } else if (numbFisherman >= 12){
                rent = rentBoatSpring * 0.75;
            }
            
                if (numbFisherman % 2 === 0){
                   rent *= 0.95;
                }
        break;

        case "Summer":

            if (numbFisherman <= 6){
                rent = rentBoatSummerAutumn * 0.90;
            } else if (numbFisherman >= 7 && numbFisherman <= 11){
                rent = rentBoatSummerAutumn * 0.85;
            } else if (numbFisherman >= 12){
                rent = rentBoatSummerAutumn * 0.75;
            }
            
                if (numbFisherman % 2 === 0){
                   rent *= 0.95;
                }
        break;

        case "Autumn":

            if (numbFisherman <= 6){
                rent = rentBoatSummerAutumn * 0.90;
            } else if (numbFisherman >= 7 && numbFisherman <= 11){
                rent = rentBoatSummerAutumn * 0.85;
            } else if (numbFisherman >= 12){
                rent = rentBoatSummerAutumn * 0.75;
            }
        break;

        case "Winter":

            if (numbFisherman <= 6){
                rent = rentBoatWinter * 0.90;
            } else if (numbFisherman >= 7 && numbFisherman <= 11){
                rent = rentBoatWinter * 0.85;
            } else if (numbFisherman >= 12){
                rent = rentBoatWinter * 0.75;
            }
            
                if (numbFisherman % 2 === 0){
                   rent *= 0.95;
                }
        break;
    }

if (rent <= budgetGroup){
    let leftMoney = budgetGroup - rent;
    console.log(`Yes! You have ${leftMoney.toFixed(2)} leva left.`);

} else {
    let moneyNeeded = rent - budgetGroup;
    console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
}
 
}

boat (["5000", "Winter", "7"]);