function flowers(input){

    let typeOfFlower = input[0];
    let numbOfFlowers = Number(input[1]);
    let budget = Number(input[2]);

    let price = 0;
    

    switch (typeOfFlower) {
        case "Roses":
            
            if (numbOfFlowers <= 80){
                price = numbOfFlowers * 5;
            } else if (numbOfFlowers > 80){
                price = numbOfFlowers * 5;
                price *= 0.9;
            }

        break;

        case "Dahlias":
            
            if (numbOfFlowers <= 90){
                price = numbOfFlowers * 3.80;
            } else if (numbOfFlowers > 90){
                price = numbOfFlowers * 3.80;
                price *= 0.85;
            }

        break;

        case "Tulips":
            
            if (numbOfFlowers <= 80){
                price = numbOfFlowers * 2.80;
            } else if (numbOfFlowers > 80){
                price = numbOfFlowers * 2.80;
                price *= 0.85;
            }

        break;

        case "Narcissus":
            
            if (numbOfFlowers < 120){
                price = numbOfFlowers * 3;
                price *= 1.15;
            } else if (numbOfFlowers >= 120){
                price = numbOfFlowers * 3;
            }

        break;

        case "Gladiolus":
            
            if (numbOfFlowers < 80){
                price = numbOfFlowers * 2.50;
                price *= 1.20;
            } else if (numbOfFlowers >= 80){
                price = numbOfFlowers * 2.50;
            } 

        break;

    }

    if (budget >= price) {
        let leftMoney = budget - price;
        console.log(`Hey, you have a great garden with ${numbOfFlowers} ${typeOfFlower} and ${leftMoney.toFixed(2)} leva left.`);
    } else {
        let MoneyNeeded = price - budget;
        console.log(`Not enough money, you need ${MoneyNeeded.toFixed(2)} leva more.`);
    }
}

flowers (["Roses", "80", "0"]);



// function flowers(input){

//     let typeOfFlower = input[0];
//     let numbOfFlowers = Number(input[1]);
//     let budget = Number(input[2]);

//     let price = 0;
    

//     if (typeOfFlower === "Roses") {
        
//             if (numbOfFlowers <= 80){
//                 price = numbOfFlowers * 5;
//             } else if (numbOfFlowers > 80){
//                 price = numbOfFlowers * 5;
//                 price *= 0.9;
//             }

//     }else if (typeOfFlower === "Dahlias"){

//             if (numbOfFlowers <= 90){
//                 price = numbOfFlowers * 3.80;
//             } else if (numbOfFlowers > 90){
//                 price = numbOfFlowers * 3.80;
//                 price *= 0.85;
//             }


//     }else if (typeOfFlower === "Tulips"){
            
//             if (numbOfFlowers <= 80){
//                 price = numbOfFlowers * 2.80;
//             } else if (numbOfFlowers > 80){
//                 price = numbOfFlowers * 2.80;
//                 price *= 0.85;
//             }

//     }else if (typeOfFlower === "Narcissus"){
            
//             if (numbOfFlowers < 120){
//                 price = numbOfFlowers * 3;
//                 price *= 1.15;
//             } else if (numbOfFlowers >= 120){
//                 price = numbOfFlowers * 3;
//             }

//     }else if (typeOfFlower === "Gladiolus"){
            
//             if (numbOfFlowers < 80){
//                 price = numbOfFlowers * 2.50;
//                 price *= 1.20;
//             } else if (numbOfFlowers >= 80){
//                 price = numbOfFlowers * 2.50;
//             } 

//     }

//     if (budget >= price) {
//         let leftMoney = budget - price;
//         console.log(`Hey, you have a great garden with ${numbOfFlowers} ${typeOfFlower} and ${leftMoney.toFixed(2)} leva left.`);
//     } else {
//         let MoneyNeeded = price - budget;
//         console.log(`Not enough money, you need ${MoneyNeeded.toFixed(2)} leva more.`);
//     }
// }

// flowers (["Gladiolus",
// "80",
// "-1000"]);