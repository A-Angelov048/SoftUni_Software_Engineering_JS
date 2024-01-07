function  footballKit(input){

    let priceOfTshirt = Number(input[0]);
    let maxSum = Number(input[1]);

    let priceOfShorts = priceOfTshirt * 0.75;
    let priceOfSocks = priceOfShorts * 0.20;
    let priceOfShoes = (priceOfTshirt + priceOfShorts) * 2;

    let finalPrice = priceOfTshirt + priceOfShorts + priceOfSocks + priceOfShoes;
    finalPrice *= 0.85;

    if (finalPrice >= maxSum){
        console.log("Yes, he will earn the world-cup replica ball!");
        console.log(`His sum is ${finalPrice.toFixed(2)} lv.`);
    } else {
        let neededMoney = maxSum - finalPrice;
        console.log("No, he will not earn the world-cup replica ball.");
        console.log(`He needs ${neededMoney.toFixed(2)} lv. more.`);
    }

}

footballKit (["55", "310"]);