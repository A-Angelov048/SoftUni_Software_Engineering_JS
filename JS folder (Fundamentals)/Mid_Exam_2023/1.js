function burgerBus(arr) {

    let numbCity = Number(arr.shift());
    let totalProfit = 0;

    for (let i = 1; i <= numbCity; i++) {

        let currentCityEarnedMoney = 0;
        let city = arr.shift();
        let earnedMoney = Number(arr.shift());
        let expenses = Number(arr.shift());

        if (i % 3 === 0 && i % 5 !== 0) {
            expenses *= 1.5;
        }
        if (i % 5 === 0) {
            earnedMoney *= 0.9;
        }

        currentCityEarnedMoney = earnedMoney - expenses;
        totalProfit += currentCityEarnedMoney;
        console.log(`In ${city} Burger Bus earned ${currentCityEarnedMoney.toFixed(2)} leva.`);
    }

    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`);
}

burgerBus(["5",

    "Lille",

    "2226.00",

    "1200.60",

    "Rennes",

    "6320.60",

    "5460.20",

    "Reims",

    "600.20",

    "452.32",

    "Bordeaux",

    "6925.30",

    "2650.40",

    "Montpellier",

    "680.50",

    "290.20"])