function vacation(input){

    let i = 0;
    let neededMoneyForVac = Number(input[i]);
    i++;
    let availableMoney = Number(input[i]);
    i++;
    let act = input[i];
    i++
    let moneySpendSave = Number(input[i]);
    i++

    let countDays = 0;

    while(availableMoney < neededMoneyForVac){

        if(act === "spend"){
            countDays ++
            availableMoney -= moneySpendSave;
                if (availableMoney < 0){
                    availableMoney = 0;
                }
        } else if (act === "save") {
            countDays ++
            availableMoney += moneySpendSave;
        } else {
            break;
        }
        act = input[i];
        i++;
        moneySpendSave = Number(input[i]);
        i++;
    }

    if(availableMoney >= neededMoneyForVac){
        console.log(`You saved the money for ${countDays} days.`);
    } else {
        console.log("You can't save the money.");
        console.log(countDays);
    }

}

vacation (["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])

