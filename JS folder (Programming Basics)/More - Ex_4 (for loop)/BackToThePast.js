function past(input){

    let inheritedMoney = Number(input[0]);
    let yearToLive = Number(input[1]);

    let backToYear = 1800;
    let countAges = 18;

    for(let i = backToYear; i <= yearToLive; i++){
 
        if (i % 2 === 0){
            inheritedMoney = inheritedMoney - 12000;
        } else if (i % 2 === 1){
            inheritedMoney = inheritedMoney - (12000 + countAges * 50);
        }
        countAges++;
    }

    if (inheritedMoney >= 0){
        console.log(`Yes! He will live a carefree life and will have ${inheritedMoney.toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${Math.abs(inheritedMoney).toFixed(2)} dollars to survive.`);
    }

}

past (["50000", "1800"]);