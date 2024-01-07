function roadRadar(speed, area) {

    let statusArr = ['speeding', 'excessive speeding', 'reckless driving'];

    let objFunction = {

        motorway: (a) => {
            if (a <= 130) {
                console.log(`Driving ${speed} km/h in a 130 zone`);
            } else {
                let status = '';
                let difference = a - 130;
                if (difference <= 20) {
                    status = statusArr[0];
                } else if (difference <= 40) {
                    status = statusArr[1];
                } else {
                    status = statusArr[2];
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of 130 - ${status}`);
            }
        }

        , interstate: (a) => {
            if (a <= 90) {
                console.log(`Driving ${speed} km/h in a 90 zone`);
            } else {
                let status = '';
                let difference = a - 90;
                if (difference <= 20) {
                    status = statusArr[0];
                } else if (difference <= 40) {
                    status = statusArr[1];
                } else {
                    status = statusArr[2];
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of 90 - ${status}`);
            }
        }

        , city: (a) => {
            if (a <= 50) {
                console.log(`Driving ${speed} km/h in a 50 zone`);
            } else {
                let status = '';
                let difference = a - 50;
                if (difference <= 20) {
                    status = statusArr[0];
                } else if (difference <= 40) {
                    status = statusArr[1];
                } else {
                    status = statusArr[2];
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of 50 - ${status}`);
            }
        }

        , residential: (a) => {
            if (a <= 20) {
                console.log(`Driving ${speed} km/h in a 20 zone`);
            } else {
                let status = '';
                let difference = a - 20;
                if (difference <= 20) {
                    status = statusArr[0];
                } else if (difference <= 40) {
                    status = statusArr[1];
                } else {
                    status = statusArr[2];
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of 20 - ${status}`);
            }
        }
    }

    objFunction[area](speed);
}

roadRadar(40, 'city');
console.log('============');
roadRadar(21, 'residential')
console.log('============');
roadRadar(120, 'interstate')
console.log('============');
roadRadar(200, 'motorway')
console.log('============');