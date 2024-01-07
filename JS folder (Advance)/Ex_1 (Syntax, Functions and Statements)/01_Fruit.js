function fruit(str, grams, price) {

    const needMoney = (grams / 1000) * price;
    console.log(`I need $${needMoney.toFixed(2)} to buy ${(grams/1000).toFixed(2)} kilograms ${str}.`);
}

fruit('orange', 2500, 1.80)