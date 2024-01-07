function happyCat(input) {

    let days = Number(input[0]);
    let hours = Number(input[1]);

    let totalMoneySpend = 0;
    let moneyPerDay = 0; 

    for (let i = 1; i <= days; i++) {
        for (let j = 1; j <= hours; j++) {

            if (i % 2 === 0 && j % 2 === 1){
                totalMoneySpend += 2.50;
                moneyPerDay += 2.50;
            } else if (i % 2 === 1 && j % 2 === 0){
                totalMoneySpend += 1.25;
                moneyPerDay += 1.25;
            } else {
                totalMoneySpend += 1;
                moneyPerDay += 1;
            }
        }
        console.log(`Day: ${i} - ${moneyPerDay.toFixed(2)} leva`);
        moneyPerDay = 0;
    }
console.log(`Total: ${totalMoneySpend.toFixed(2)} leva`);

}

// happyCat(['2', '5']);
happyCat(['5', '2']);