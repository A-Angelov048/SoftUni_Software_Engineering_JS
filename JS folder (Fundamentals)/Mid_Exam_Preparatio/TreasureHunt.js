function treasureHunt(arr) {

    let arrLoot = arr.shift().split('|')

    let i = 0;
    let command = arr[i];
    i++;

    while (command !== 'Yohoho!') {

        let data = command.split(' ');
        let currentCommand = data.shift();

        switch (currentCommand) {

            case 'Loot':
                data.forEach(i => {
                    if (!arrLoot.includes(i)) {
                        arrLoot.unshift(i);
                    }
                })
                break;

            case 'Drop':
                let index = Number(data);
                if (index >= 0 && index <= arrLoot.length - 1) {
                    let removeIndex = arrLoot.splice(index, 1).join(' ');
                    arrLoot.push(removeIndex);
                }
                break;

            case 'Steal':
                let count = Number(data);
                let stolenItems = arrLoot.splice(-count);
                console.log(stolenItems.join(', '));
                break;

        }
        command = arr[i];
        i++;
    }

    if (arrLoot.length === 0) {
        console.log('Failed treasure hunt.');
    } else {
        let sumLength = 0;
        arrLoot.forEach(i => {
            sumLength += i.length;
        })
        console.log(`Average treasure gain: ${(sumLength / arrLoot.length).toFixed(2)} pirate credits.`);
    }
}


treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"])

console.log('===========');

treasureHunt(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"])
