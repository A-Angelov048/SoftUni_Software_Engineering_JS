function train(input){

    let i = 0;
    let numbJury = Number(input[i]);
    i++;
    let command = input[i];
    i++;

    let averageMark = 0;
    let averageAllMark = 0;
    let countAllMark = 0;
    let countJury = 0;

    while(command !== "Finish"){

        let namePresentation = command;
        let mark = Number(input[i]);
        i++;
        countJury++;
        countAllMark++;
        averageMark += mark;
        averageAllMark += mark;
        if (countJury === numbJury){
            console.log(`${namePresentation} - ${(averageMark / numbJury).toFixed(2)}.`);
            command = input[i];
            i++;
            averageMark = 0;
            countJury = 0;
        }  
    }

    console.log(`Student's final assessment is ${(averageAllMark / countAllMark).toFixed(2)}.`);
}

train (["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])


