function balance(input){

    let totalMoney = 0;
    let i = 0;
    let money = input[i];
    

    while (money !== "NoMoreMoney"){

        money = Number(input[i]);
        if (money < 0){
            console.log("Invalid operation!");
            break;
        }
        console.log(`Increase: ${money.toFixed(2)}`);
        totalMoney += money;
        i++;
        money = String(input[i]);
        
    }

    console.log(`Total: ${totalMoney.toFixed(2)}`);

}

balance (["5.51", 
"69.42",
"100",
"NoMoreMoney"])
