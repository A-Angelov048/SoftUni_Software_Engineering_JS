function system(input) {

    let i = 0;

    let expectedMoneyFromSells = Number(input[i]);
    i++;
    let command = input[i];
    i++;

    let countSells = 0;
    let averageCash = 0;
    let countCash = 0;
    let averageCreditC = 0;
    let countCreditC = 0;
    let MoneyFromProduct = 0;

    while (command !== "End") {

        if (expectedMoneyFromSells <= MoneyFromProduct) {
            averageCash /= countCash;
            averageCreditC /= countCreditC;
            console.log(`Average CS: ${averageCash.toFixed(2)}`);
            console.log(`Average CC: ${averageCreditC.toFixed(2)}`);
            return;
        }

        let money = Number(command);
        countSells++;

        if (countSells % 2 === 1) {
            if (money > 100) {
                console.log("Error in transaction!");
            } else {
                averageCash += money;
                countCash++;
                MoneyFromProduct += money;
                console.log("Product sold!");
            }
        } else if (countSells % 2 === 0) {

            if (money < 10) {
                console.log("Error in transaction!");
            } else {
                MoneyFromProduct += money;
                averageCreditC += money;
                countCreditC++;
                console.log("Product sold!");
            }
        }

        command = input[i];
        i++;
    }

    if (command === "End") {

        console.log("Failed to collect required money for charity.");
    }

}

system(["600", "86", "150", "98", "227", "End"]);
// system(["500", "120", "8", "63", "256", "78", "317"]);