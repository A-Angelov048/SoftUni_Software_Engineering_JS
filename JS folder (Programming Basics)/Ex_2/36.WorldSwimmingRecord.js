function swim(input){

    let recordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeInSecond = Number(input[2]);

    let distanceSwumInSecond = distanceInMeters * timeInSecond;

    let waterResistanceInSeconds = distanceInMeters / 15;
    waterResistanceInSeconds = Math.floor(waterResistanceInSeconds);
    waterResistanceInSeconds = waterResistanceInSeconds * 12.5;

    let finalTime = distanceSwumInSecond + waterResistanceInSeconds;
    
    if (finalTime < recordInSeconds){
        console.log(`Yes, he succeeded! The new world record is ${finalTime.toFixed(2)} seconds.`);

    } else {
        let timeNeeded = finalTime - recordInSeconds;
        console.log(`No, he failed! He was ${timeNeeded.toFixed(2)} seconds slower.`);
        
    }
    

}

swim (["55555.67", "3017", "5.03"]);