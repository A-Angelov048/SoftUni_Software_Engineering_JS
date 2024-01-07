function travel(input){

    let i = 0;
    let country = input[i];
    i++;
    let minBudget = Number(input[i]);
    i++;

    let nedMoney = 0;

    while(country !== "End"){
        
        while(minBudget >= nedMoney){
            let moneyEarn = Number(input[i]);
            i++;
            nedMoney += moneyEarn;
            if (nedMoney >= minBudget){
                console.log(`Going to ${country}!`);
                country = input[i];
                i++;
                minBudget = Number(input[i]);
                i++;
                nedMoney = 0;
            } 
        }
    break;
              
    }
}

travel (["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"])



// function travel(input){

//     let i = 0;
//     let country = input[i];
//     i++;
//     let minBudget = Number(input[i]);
//     i++;

//     let nedMoney = 0;

//     while(country !== "End"){
        
//         if(minBudget >= nedMoney){
//             let moneyEarn = Number(input[i]);
//             i++;
//             nedMoney += moneyEarn;
//             if (nedMoney >= minBudget){
//                 console.log(`Going to ${country}!`);
//                 country = input[i];
//                 i++;
//                 minBudget = Number(input[i]);
//                 i++;
//                 nedMoney = 0;
//             } 
//             continue;
//         } else {
//             break;
//         }
              
//     }
// }

