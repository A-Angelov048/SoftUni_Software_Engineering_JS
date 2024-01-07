function validityChecker(x1, y1, x2, y2) {

    let checkX1Y1 = Math.sqrt(Math.pow(x1 - 0, 2) + Math.pow(y1 - 0, 2));
    let checkX2Y2 = Math.sqrt(Math.pow(x2 - 0, 2) + Math.pow(y2 - 0, 2));
    let checkAllPoints = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    console.log(Number.isInteger(checkX1Y1) ? `{${x1}, ${y1}} to {0, 0} is valid` : `{${x1}, ${y1}} to {0, 0} is invalid`);
    console.log(Number.isInteger(checkX2Y2) ? `{${x2}, ${y2}} to {0, 0} is valid` : `{${x2}, ${y2}} to {0, 0} is invalid`);
    console.log(Number.isInteger(checkAllPoints) ? `{${x1}, ${y1}} to {${x2}, ${y2}} is valid` : `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
}

validityChecker(3, 0, 0, 4)
console.log('============');

validityChecker(2, 1, 1, 1)
console.log('============');