function manOWar(arr) {

    let pirateShip = arr.shift().split('>').map(Number);
    let warShip = arr.shift().split('>').map(Number);
    let maxHealth = Number(arr.shift())

    let i = 0;
    let command = arr[i];
    i++;

    while (command !== 'Retire') {

        let data = command.split(' ');
        let currentCommand = data.shift();

        switch (currentCommand) {

            case 'Fire':
                let [index, damage] = data.map(Number);
                if (index >= 0 && index < warShip.length) {
                    warShip[index] -= damage;

                    if (warShip[index] <= 0) {
                        return 'You won! The enemy ship has sunken.';
                    }
                }
                break;

            case 'Defend':
                let [startIndex, endIndex, damage1] = data.map(Number);
                if ((startIndex >= 0 && startIndex < pirateShip.length) && (endIndex >= 0 && endIndex < pirateShip.length)) {
                    for (let i = startIndex; i <= endIndex; i++) {

                        pirateShip[i] -= damage1;
                        if (pirateShip[i] <= 0) {
                            return 'You lost! The pirate ship has sunken.';
                        }
                    }
                }
                break;

            case 'Repair':
                let [index1, healt] = data.map(Number);
                if (index1 >= 0 && index1 < pirateShip.length) {
                    pirateShip[index1] += healt;

                    if (pirateShip[index1] > maxHealth) {
                        pirateShip[index1] = maxHealth;
                    }
                }
                break;

            case 'Status':
                let count = 0;
                let lowHealt = maxHealth * 0.2;
                pirateShip.forEach(i => {
                    if (i < lowHealt) {
                        count++;
                    }
                })
                console.log(`${count} sections need repair.`);
                break;
        }
        command = arr[i];
        i++;
    }

    let pirateShipSum = pirateShip.reduce((a, b) => a + b);
    let warShipSum = warShip.reduce((a, b) => a + b);

    return `Pirate ship status: ${pirateShipSum}
Warship status: ${warShipSum}`
}

console.log(manOWar(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 1 4 5",
    "Repair 1 33",
    "Status",
    "Retire"]));

console.log('===============================');

console.log(manOWar(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"])
);
