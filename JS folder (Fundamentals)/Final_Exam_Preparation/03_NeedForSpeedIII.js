function needForSpeed(data) {

    let availableCars = Number(data.shift())
    let obtainedCars = [];

    for (let i = 0; i < availableCars; i++) {

        let [car, mileage, fuel] = data.shift().split('|')
        mileage = Number(mileage);
        fuel = Number(fuel);
        obtainedCars.push({ car, mileage, fuel })
    }

    let j = 0;
    let command = data[j];
    j++;

    while (command !== 'Stop') {

        let [curCommand, car, distanceOrKm, fuel] = command.split(' : ')
        distanceOrKm = Number(distanceOrKm);
        fuel = Number(fuel);
        let findCurCar = obtainedCars.find(c => c.car === car);

        switch (curCommand) {

            case 'Drive':
                if (findCurCar) {

                    if (findCurCar.fuel >= fuel) {
                        findCurCar.mileage += distanceOrKm;
                        findCurCar.fuel -= fuel;
                        console.log(`${car} driven for ${distanceOrKm} kilometers. ${fuel} liters of fuel consumed.`);
                    } else {
                        console.log('Not enough fuel to make that ride');
                    }

                    if (findCurCar.mileage >= 100000) {

                        let index = obtainedCars.indexOf(findCurCar)
                        obtainedCars.splice(index, 1);
                        console.log(`Time to sell the ${car}!`);
                    }
                }
                break;

            case 'Refuel':
                if (findCurCar) {

                    if (findCurCar.fuel + distanceOrKm > 75) {
                        let needFuelForFullTank = Math.abs((findCurCar.fuel + distanceOrKm - 75) - distanceOrKm);
                        findCurCar.fuel += needFuelForFullTank;
                        console.log(`${car} refueled with ${needFuelForFullTank} liters`);
                    } else {
                        findCurCar.fuel += distanceOrKm
                        console.log(`${car} refueled with ${distanceOrKm} liters`);
                    }
                }
                break;

            case 'Revert':
                if (findCurCar) {

                    findCurCar.mileage -= distanceOrKm;
                    if (findCurCar.mileage < 10000) {
                        findCurCar.mileage = 10000;
                        break;
                    }
                    console.log(`${car} mileage decreased by ${distanceOrKm} kilometers`);
                }
                break;
        }

        command = data[j];
        j++
    }

    for (let line of obtainedCars) {
        console.log(`${line.car} -> Mileage: ${line.mileage} kms, Fuel in the tank: ${line.fuel} lt.`);
    }
}


needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]);

console.log('================');

needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]);