function carFactory(data) {

    let carObj = {};

    carObj.model = data.model;

    let engineSize = {

        smallEngine: {
            power: 90,
            volume: 1800
        },
        normalEngine: {
            power: 120,
            volume: 2400
        },
        monsterEngine: {
            power: 200,
            volume: 3500
        }
    }

    if (data.power <= engineSize.smallEngine.power) {
        carObj.engine = engineSize.smallEngine;
    } else if (data.power <= engineSize.normalEngine.power) {
        carObj.engine = engineSize.normalEngine;
    } else {
        carObj.engine = engineSize.monsterEngine;
    }

    if (data.carriage === 'hatchback') {
        carObj.carriage = {
            type: data.carriage,
            color: data.color
        }
    } else {
        carObj.carriage = {
            type: data.carriage,
            color: data.color
        }
    }

    if (data.wheelsize % 2 === 0) {
        data.wheelsize -= 1;
    }

    carObj.wheels = new Array(4).fill(data.wheelsize)
    return carObj;
}

console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));

console.log('===========');

console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));