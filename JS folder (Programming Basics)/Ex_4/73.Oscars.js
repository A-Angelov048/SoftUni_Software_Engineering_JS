function oscars(input) {
    let actorName = input[0];
    let startingPoints = Number(input[1]);
    let referees = Number(input[2]);

    let nameRef = "";
    let letters = 0;
    let count = (referees * 2) + 2;


    for (let index = 3; index <= count; index++) {
        if (index % 2 === 1) {
            nameRef = input[index];
            letters = nameRef.length;
            let pointsPerLatter = Number(input[index + 1]);
            startingPoints = startingPoints + (pointsPerLatter * letters / 2);
        }
        if (startingPoints >= 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${startingPoints.toFixed(1)}!`);
            break;
        }
    }
    if (startingPoints < 1250.5)
        console.log(`Sorry, ${actorName} you need ${(1250.5 - startingPoints).toFixed(1)} more!`);
}

oscars (["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])
