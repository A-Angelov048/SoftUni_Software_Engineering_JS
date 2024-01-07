function steps(input){

    let i = 0;
    let footSteps = Number(input[i]);
    let countSteps = 0;
    let goalFootSteps = 10000;

    while (countSteps < goalFootSteps){
        let goingHome = input[i];

        if (goingHome === "Going home"){
            i++;
            footSteps = Number(input[i]);
            countSteps += footSteps;
            break;
        }
        footSteps = Number(input[i]);
        i++;
        countSteps += footSteps;
    }

    if(countSteps >= goalFootSteps){
        console.log("Goal reached! Good job!");
        console.log(`${countSteps - goalFootSteps} steps over the goal!`);
    } else {
        console.log(`${goalFootSteps - countSteps} more steps to reach goal.`);
    }

}

steps(["125",
"250",
"4000",
"30",
"2678",
"4682"])



