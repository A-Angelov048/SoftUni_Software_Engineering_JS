function pirates(data) {

    let infoCities = [];

    let command = data.shift();

    while (command !== 'Sail') {

        let [town, people, gold] = command.split('||')
        people = Number(people);
        gold = Number(gold);
        let findTown = infoCities.find(n => n.town === town);

        if (findTown) {
            findTown.people += Number(people);
            findTown.gold += Number(gold);
        } else {
            infoCities.push({ town, people, gold });
        }
        command = data.shift()
    }
    command = data.shift();

    while (command !== 'End') {

        command = command.split('=>');
        let currentCommand = command.shift();
        let events = command;

        switch (currentCommand) {

            case 'Plunder':
                let [town, people, gold] = events;
                let plunder = infoCities.find(a => a.town === town)

                if (plunder) {
                    plunder.people -= Number(people);
                    plunder.gold -= Number(gold);
                    console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);

                    if (plunder.people === 0 || plunder.gold === 0) {

                        let index = infoCities.indexOf(plunder)
                        infoCities.splice(index, 1);
                        console.log(`${town} has been wiped off the map!`);
                    }
                }
                break;

            case 'Prosper':
                let [townProsper, goldProsper] = command;
                let prosper = infoCities.find(a => a.town === townProsper)

                if (Number(goldProsper) < 0) {
                    console.log(`Gold added cannot be a negative number!`);
                } else if (prosper) {
                    prosper.gold += Number(goldProsper);
                    console.log(`${goldProsper} gold added to the city treasury. ${townProsper} now has ${prosper.gold} gold.`);
                }
                break;
        }
        command = data.shift();
    }

    if (infoCities.length === 0) {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    } else {
        console.log(`Ahoy, Captain! There are ${infoCities.length} wealthy settlements to go to:`);

        for (let line of infoCities) {
            let toArr = Object.entries(line)
            let [town, people, gold] = toArr
            console.log(`${town[1]} -> Population: ${people[1]} citizens, Gold: ${gold[1]} kg`);
        }
    }
}


pirates(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"])

console.log('===================');

pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"])