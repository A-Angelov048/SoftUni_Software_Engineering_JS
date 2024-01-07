function timeToWalk(steps, footprint, speed) {

    let distance = steps * footprint;
    let rests = Math.floor(distance / 500);
    let timeMins = (distance / speed) * 3.6 / 60;

    let hours = Math.floor(timeMins / 60);
    let minutes = Math.floor(timeMins - hours * 60);
    let seconds = Math.round((timeMins * 60) - (minutes * 60));

    let toPrintHours = hours < 10 ? '0' + hours : hours;
    let toPrintMinutes = minutes + rests;
    toPrintMinutes = toPrintMinutes < 10 ? '0' + toPrintMinutes : toPrintMinutes
    let toPrintSecond = seconds < 10 ? '0' + seconds : seconds;

    console.log(`${toPrintHours}:${toPrintMinutes}:${toPrintSecond}`);
}

timeToWalk(4000, 0.60, 5)
timeToWalk(2564, 0.70, 5.5)
timeToWalk(6900, 0.70, 5.5)