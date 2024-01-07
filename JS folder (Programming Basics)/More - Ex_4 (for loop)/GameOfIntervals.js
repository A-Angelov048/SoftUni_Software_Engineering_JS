function intervals(input){

    let NumbMoves = Number(input[0]);

    let allPoints = 0;
    let points0to9 = 0;
    let points10to19 = 0;
    let points20to29 = 0;
    let points30to39 = 0;
    let points40to50 = 0
    let invalidPoints = 0;

    for(let i = 1; i <= NumbMoves; i++){

        let eachMovePoints = Number(input[i]);

        if (eachMovePoints < 0 || eachMovePoints > 50){
            invalidPoints++;
            allPoints /= 2;
        } else if (eachMovePoints <= 9){
            points0to9++;
            eachMovePoints *= 0.2;
            allPoints += eachMovePoints;
        } else if (eachMovePoints <= 19){
            points10to19++;
            eachMovePoints *= 0.3;
            allPoints += eachMovePoints;
        } else if (eachMovePoints <=29){
            points20to29++;
            eachMovePoints *= 0.4;
            allPoints += eachMovePoints;
        } else if (eachMovePoints <= 39){
            points30to39++;
            allPoints += 50;
        } else {
            points40to50++;
            allPoints += 100;
        }
    }

    let averagePoint0to9 = (points0to9 / NumbMoves) * 100;
    let averagePoint10to19 = (points10to19 / NumbMoves) * 100;
    let averagePoint20to29 = (points20to29 / NumbMoves) * 100;
    let averagePoint30to39 = (points30to39 / NumbMoves) * 100;
    let averagePoint40to50 = (points40to50 / NumbMoves) * 100;
    let averageInvalidPoints = (invalidPoints / NumbMoves) * 100;

    console.log(allPoints.toFixed(2));
    console.log(`From 0 to 9: ${averagePoint0to9.toFixed(2)}%`);
    console.log(`From 10 to 19: ${averagePoint10to19.toFixed(2)}%`);
    console.log(`From 20 to 29: ${averagePoint20to29.toFixed(2)}%`);
    console.log(`From 30 to 39: ${averagePoint30to39.toFixed(2)}%`);
    console.log(`From 40 to 50: ${averagePoint40to50.toFixed(2)}%`);
    console.log(`Invalid numbers: ${averageInvalidPoints.toFixed(2)}%`);

}

intervals(["10", "43", "57", "-12", "23", "12", "0", "50", "40", "30", "20"])