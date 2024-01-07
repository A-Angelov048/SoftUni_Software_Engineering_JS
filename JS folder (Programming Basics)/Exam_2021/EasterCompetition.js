function easterCompetition(input){

    let i = 0;

    let numbEasterBread = Number(input[i]);
    i++;
    let nameBaker = input[i];
    i++;
    let command = input[i];
    i++;

    let markEasterBread = 0;
    let bestBaker = "";
    let bestMark = 0;

    for(let j = 0; j < numbEasterBread; j++){

        while(command !== "Stop"){
            
            markEasterBread += Number(command);
            command = input[i];
            i++;
        }

        console.log(`${nameBaker} has ${markEasterBread} points.`);

        if (markEasterBread > bestMark){
            bestMark = markEasterBread;
            bestBaker = nameBaker;
            console.log(`${bestBaker} is the new number 1!`);
        }

        nameBaker = input[i];
        i++;
        command = input[i];
        i++;

        markEasterBread = 0;
    }

    console.log(`${bestBaker} won competition with ${bestMark} points!`);

}

easterCompetition (["2",
"Chef Angelov",
"9",
"9",
"9",
"Stop",
"Chef Rowe",
"10",
"10",
"10",
"10",
"Stop"])
