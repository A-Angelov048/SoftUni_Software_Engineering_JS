function computerFirm(input){

    let numbModelsComp = Number(input[0]);
    let totalRating = 0;
    let totalSells = 0;

    for (let x = 1; x <= numbModelsComp; x++){
        let curentModel = input[x];
        let rating = Number(curentModel[2]);
        let possibleSells = Number(`${curentModel[0]}${curentModel[1]}`);
       
        if (rating === 2){
           totalSells += possibleSells * 0;
        } else if (rating === 3){
            totalSells += possibleSells * 0.5;
        } else if (rating === 4){
            totalSells += possibleSells * 0.7;
        } else if (rating === 5){
            totalSells += possibleSells * 0.85;
        } else if (rating ===6){
            totalSells += possibleSells
        }
        
        totalRating += rating;
    }

    let arithmeticRating = totalRating / numbModelsComp;

    console.log(totalSells.toFixed(2));
    console.log(arithmeticRating.toFixed(2));

}

computerFirm(["5", "122", "156", "202", "214", "185"]);