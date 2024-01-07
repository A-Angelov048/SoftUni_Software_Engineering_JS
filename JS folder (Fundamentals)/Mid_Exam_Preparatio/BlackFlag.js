function blackFlag(arr) {

    let arrToNumbers = arr.map(Number);

    let daysToPlunder = arrToNumbers[0];
    let dailyPlunder = arrToNumbers[1];
    let expectedPlunder = arrToNumbers[2];

    let gatherPlunder = 0;

    for (let i = 1; i <= daysToPlunder; i++) {
        gatherPlunder += dailyPlunder;
        if (i % 3 === 0) {
            gatherPlunder += dailyPlunder * 0.5;
        }
        if (i % 5 === 0) {
            gatherPlunder *= 0.7;
        }
    }
    if (gatherPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${gatherPlunder.toFixed(2)} plunder gained.`);
    } else {
        let toPercent = (gatherPlunder / expectedPlunder) * 100;
        console.log(`Collected only ${toPercent.toFixed(2)}% of the plunder.`);
    }
}



blackFlag(["5", "40", "100"]);
console.log('---------------');
blackFlag(["10", "20", "380"]);
console.log('---------------');