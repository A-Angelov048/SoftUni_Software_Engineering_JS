function moveTime(input){

    let nameSeries = input[0];
    let durationPerEpisode = Number(input[1]);
    let durationOfBreak = Number(input[2]);

    let timeForLunch = 1/8 * durationOfBreak;
    let timeForRest = 1/4 * durationOfBreak;

    let finalLeftTime = durationOfBreak - timeForLunch - timeForRest;
    

    if (finalLeftTime >= durationPerEpisode){
        let leftMinutes = finalLeftTime - durationPerEpisode;
        console.log(`You have enough time to watch ${nameSeries} and left with ${Math.ceil(leftMinutes)} minutes free time.`);

    } else {
        let neededMinutes = durationPerEpisode - finalLeftTime;
        console.log(`You don't have enough time to watch ${nameSeries}, you need ${Math.ceil(neededMinutes)} more minutes.`);
    }

}

moveTime (["Game of Thrones", "60", "96"]);