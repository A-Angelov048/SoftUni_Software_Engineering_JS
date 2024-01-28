function plantDiscovery(data) {

    let nLines = Number(data.shift());
    let plants = [];

    for (let i = 0; i < nLines; i++) {

        let [plantName, rarity] = data.shift().split('<->');
        rarity = Number(rarity);
        plants.push({ plantName, rarity, rating: 0, average: 0 });
    }

    let j = 0;
    let command = data[j];
    j++;

    while (command !== 'Exhibition') {

        let curCommand = command.split(': ')
        let [plantName, rarityOrRating] = curCommand.pop().split(' - ')
        let findPlant = plants.find(n => n.plantName === plantName);

        if (!findPlant) {
            console.log('error');

        } else {
            switch (curCommand.join('')) {

                case 'Rate':
                    if (findPlant) {
                        findPlant.rating += +rarityOrRating;
                        findPlant.average += 1;
                    }
                    break;

                case 'Update':
                    if (findPlant) {
                        findPlant.rarity = +rarityOrRating;
                    }
                    break;

                case 'Reset':
                    if (findPlant) {
                        findPlant.rating = 0;
                        findPlant.average = 0;
                    }
                    break;
            }
        }

        command = data[j];
        j++;
    }

    console.log('Plants for the exhibition:');
    for (let line of plants) {
        if (line.rating <= 0) {
            console.log(`- ${line.plantName}; Rarity: ${line.rarity}; Rating: ${(line.rating).toFixed(2)}`);
        } else {
            console.log(`- ${line.plantName}; Rarity: ${line.rarity}; Rating: ${(line.rating / line.average).toFixed(2)}`);
        }
    }
}

plantDiscovery(["4",
    "Arnoldii<->4",
    "Arnoldii<->5",
    "Woodii<->7",
    "Welwitschia<->2",
    "Reset:  Arnoldii ",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Woodii - 5",
    "Update: Woodi - 5",
    "Exhibition"]);

console.log('=============');

plantDiscovery(["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"]);
