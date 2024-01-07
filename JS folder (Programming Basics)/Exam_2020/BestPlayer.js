function bestPlayer(input){

let i = 0;
let playerName = input[i];
i++;
let scoreGoals = Number(input[i]);
i++;

let bestScore = 0;
let bestPlayer = ""

while(playerName !== "END"){

    if(scoreGoals > bestScore){
        bestPlayer = playerName;
        bestScore = scoreGoals;

            if(bestScore >= 10){
                break;
            }
    }

    playerName = input[i];
    i++;
    scoreGoals = Number(input[i]);
    i++;

}

console.log(`${bestPlayer} is the best player!`);

if(bestScore >= 3){
    console.log(`He has scored ${bestScore} goals and made a hat-trick !!!`);
} else {
    console.log(`He has scored ${bestScore} goals.`);
}

}

bestPlayer (["Rooney",
"1",
"Junior",
"2",
"Paolinio",
"2",
"END"])



