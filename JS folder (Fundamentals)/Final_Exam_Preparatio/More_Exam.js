
 
 
 
function examPrep(input) {
 
    let password = input.shift();//"Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr"
 
    let commandParser = {
        'TakeOdd': (password) => {
 
            return [...password]
                .filter((symbol, index) => index % 2 !== 0)
                .join('');
        },
        'Cut': (password, index, length) => {
 
            index = Number(index);
            length = Number(length);
 
            let substring = password.substr(index, length);
 
            return password.replace(substring, '');
 
        },
        'Substitute': (password, substring, substitute) => {
            if (password.includes(substring)) {
                return password.replace(new RegExp(substring, 'g'), substitute);
            }
            console.log("Nothing to replace!");
            return password;
 
        }
    };
 
    input.forEach(line => {
        if(line !== 'Done'){
            let [command,...tokens] = line.split(' ');
            let oldPassword = password;
 
            password = commandParser[command](password, ...tokens);
 
            if(oldPassword !== password){
                console.log(password);
            }
        }
    });
 
    console.log(`Your password is: ${password}`);
 
}
examPrep(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])
    ;
 
 
console.log('==========================================================');

 
 
function examPrep2(str) {
 
 
    let regex = /[=\/][A-Z][A-Za-z]{2,}[=\/]/gm;
    let points = 0;
    let destinations = [];
 
    let foundDestinations = str.match(regex);
 
    if (foundDestinations) {
        foundDestinations.forEach(element => {
            if (element[0] === element[element.length - 1]) {
                element = element.substring(1, element.length - 1);
 
                destinations.push(element);
                points += element.length;
            }
        });
    }
 
    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${points}`);
 
}

examPrep2("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
 
console.log('==========================================================');
 
 
function NFS(input) {
 
    let result = new Map();
 
    for (const element of input) {
 
        if (element === 'Stop') {
            break;
        }
        if (element.includes('|')) {
 
            let [car, milage, fuel] = element.split('|');
 
            result.set(car, []);
            result.get(car).push(Number(milage));
            result.get(car).push(Number(fuel));
        }
        if (element.includes(' : ')) {
            //'Drive : Audi A6 : 543 : 47'
            let tokens = element.split(' : ');
 
            if (element.includes('Refuel')) {
                let givenCar = tokens[1];
                let givenFuel = +tokens[2];
 
                let sum = givenFuel + result.get(givenCar)[1];
 
                if (sum > 75) {
                    result.get(givenCar)[1] = 75;
                    sum -= 75;
                    console.log(`${givenCar} refueled with ${givenFuel - sum} liters`);
                } else {
                    result.get(givenCar)[1] = sum;
                    console.log(`${givenCar} refueled with ${givenFuel} liters`);
                }
            } else if (element.includes('Revert')) {
                let givenCar = tokens[1];
                let kilometers = Number(tokens[2]);
 
                result.get(givenCar)[0] -= kilometers;
 
                if (result.get(givenCar)[0] < 10000) {
                    result.get(givenCar)[0] = 10000;
                } else {
                    console.log(`${givenCar} mileage decreased by ${kilometers} kilometers`);
                }
            } else if (element.includes('Drive')) {
                let givenCar = tokens[1];
                let distance = Number(tokens[2]);
                let givenFuel = Number(tokens[3]);
 
                if (givenFuel <= result.get(givenCar)[1]) {
 
                    result.get(givenCar)[1] -= givenFuel;
                    result.get(givenCar)[0] += distance;
                    console.log(`${givenCar} driven for ${distance} kilometers. ${givenFuel} liters of fuel consumed.`);
 
                } else {
                    console.log("Not enough fuel to make that ride");
                }
 
                if (result.get(givenCar)[0] >= 100000) {
                    result.delete(givenCar);
                    console.log(`Time to sell the ${givenCar}!`);
                }
            }
 
        }
    }
 
    for (const [car, carInfo] of result) {
        console.log(`${car} -> Mileage: ${carInfo[0]} kms, Fuel in the tank: ${carInfo[1]} lt.`);
    }
}
NFS([
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
    'Stop',
 
]
);