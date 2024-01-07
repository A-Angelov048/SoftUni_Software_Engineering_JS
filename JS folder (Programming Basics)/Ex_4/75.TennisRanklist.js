function tennis(input){

    let numbTournaments = Number(input[0]);
    let initialPoints = Number(input[1]);

    let nameOfTournament = "";
    let tournamentsPoints = 0;
    let winner = 0;

    for ( i = 2; i <= numbTournaments + 1; i++){
        nameOfTournament = input[i];

        if(nameOfTournament === "W"){
            winner += 1
            tournamentsPoints += 2000;
        } else if (nameOfTournament === "F"){
            tournamentsPoints += 1200;
        } else {
            tournamentsPoints += 720;
        }
    }

    let finalPoints = tournamentsPoints + initialPoints;
    let averagePointsEarnFromTournaments = tournamentsPoints / numbTournaments;
    let percentWinTournaments = (winner / numbTournaments) * 100;

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${Math.floor(averagePointsEarnFromTournaments)}`);
    console.log(`${percentWinTournaments.toFixed(2)}%`);

}

tennis (["4",
"750",
"SF",
"W",
"SF",
"W"])
