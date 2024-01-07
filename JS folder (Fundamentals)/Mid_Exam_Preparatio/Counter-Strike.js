function counterStrike(arr) {

    let countWonBattles = 0;
    let energy = Number(arr.shift());

    let i = 0;
    let command = arr[i];
    i++;

    while(command !== 'End of battle'){

        let distance = Number(command);

        if (energy >= distance){
            energy -= distance; 
            countWonBattles++;
        } else {
            return `Not enough energy! Game ends with ${countWonBattles} won battles and ${energy} energy`
        }

        if (countWonBattles % 3 === 0){
            energy += countWonBattles;
        }

        command = arr[i];
        i++;
    }    
    return `Won battles: ${countWonBattles}. Energy left: ${energy}`
}

console.log(counterStrike(["100",
"10",
"10",
"10",
"1",
"2",
"3",
"73",
"10"]));

console.log('============');

console.log(counterStrike(["200",
"54",
"14",
"28",
"13",
"End of battle"])
);
