function balls(input){

    let numbBalls = Number(input[0]);

    let finalPoints = 0;
    let numbRedBalls = 0;
    let numbOrangeBalls = 0;
    let numbYellowBalls = 0;
    let numbWhiteBalls = 0;
    let numbOtherBalls = 0;
    let numbBlackBalls = 0;

    for(let i = 1; i <= numbBalls; i++){

        let colorBall = input[i];

        switch (colorBall){

            case "red": finalPoints += 5; numbRedBalls++; break;
            case "orange": finalPoints += 10; numbOrangeBalls++; break;
            case "yellow": finalPoints += 15; numbYellowBalls++; break;
            case "white": finalPoints += 20; numbWhiteBalls++; break;
            case "black": finalPoints /= 2; numbBlackBalls++; break;
            default: numbOtherBalls++; break;
        }
    }

    console.log(`Total points: ${Math.floor(finalPoints)}`);
    console.log(`Red balls: ${numbRedBalls}`);
    console.log(`Orange balls: ${numbOrangeBalls}`);
    console.log(`Yellow balls: ${numbYellowBalls}`);
    console.log(`White balls: ${numbWhiteBalls}`);
    console.log(`Other colors picked: ${numbOtherBalls}`);
    console.log(`Divides from black balls: ${numbBlackBalls}`);

}

balls (["5",
"red",
"red",
"red",
"black",
"ddd"])

