function worldTour(data) {

    let cityToTravel = data.shift();

    let i = 0;
    let command = data[i];
    i++;

    while (command !== 'Travel') {

        let [curCommand, operationOne, operationTwo] = command.split(':');

        switch (curCommand) {

            case 'Add Stop':
                let index = Number(operationOne);
                let str = operationTwo.trim();

                if (index >= 0 && index < cityToTravel.length) {
                    let firstHalf = cityToTravel.substring(0, index);
                    let secondHalf = cityToTravel.substring(index);
                    cityToTravel = firstHalf + str + secondHalf;
                }
                break;

            case 'Remove Stop':
                let stratIndex = Number(operationOne);
                let endIndex = Number(operationTwo);

                if (stratIndex >= 0 && stratIndex < cityToTravel.length && endIndex < cityToTravel.length) {
                    let firstHalf = cityToTravel.substring(0, stratIndex);
                    let secondHalf = cityToTravel.substring(endIndex + 1);
                    cityToTravel = firstHalf + secondHalf;
                }
                break;

            case 'Switch':
                let oltSTr = operationOne;
                let newStr = operationTwo;

                if (cityToTravel.includes(oltSTr)){
                    cityToTravel = cityToTravel.replace(oltSTr,newStr)
                }
                
                break;
        }
        console.log(cityToTravel);
        command = data[i];
        i++;
    }

    console.log(`Ready for world tour! Planned stops: ${cityToTravel}`);
}

worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]);

console.log('============');

worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan",
    "Travel"]);

