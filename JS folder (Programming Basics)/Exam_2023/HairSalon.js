function hairSalon(input){

    let neededMoney = Number(input[0]);
    let totalMoney = 0;

    let i = 1;

    while(input[i] !== "closed"){

        if (totalMoney >= neededMoney){
            break;
        }

        let command = input[i];
        i++;
        let secCommand = input[i];
        
        if (command === "haircut"){
            if (secCommand === "mens"){
                totalMoney += 15;
            } else if (secCommand === "ladies"){
                totalMoney += 20;
            } else if (secCommand === "kids"){
                totalMoney += 10;
            }
        } else if (command === "color"){
            if (secCommand === "touch up"){
                totalMoney += 20;
            } else if (secCommand === "full color"){
                totalMoney += 30;
            }
    }
    i++; 
}

if (totalMoney >= neededMoney){
    console.log("You have reached your target for the day!");
} else if (totalMoney < neededMoney){
    console.log(`Target not reached! You need ${neededMoney - totalMoney}lv. more.`);
}

console.log(`Earned money: ${totalMoney}lv.`);
}

hairSalon(["300", 
"haircut", 
"ladies", 
"haircut", 
"kids", 
"color", 
"touch up", 
"closed"]);