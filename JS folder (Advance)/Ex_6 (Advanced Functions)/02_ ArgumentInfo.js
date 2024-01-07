function argumentInfo(...arr) {

    let infoTypeOf = {};

    for (let line of arr) {

        let typeOfCurLine = typeof line;
        console.log(`${typeOfCurLine}: ${line}`);

        if (!infoTypeOf.hasOwnProperty(typeOfCurLine)) {
            infoTypeOf[typeOfCurLine] = 0;
        }
        infoTypeOf[typeOfCurLine]++;
    }

    let sortObj = Object.entries(infoTypeOf).sort((a, b) => b[1] - a[1])
    for (let [key, value] of sortObj) {
        console.log(`${key} = ${value}`);
    }
}


argumentInfo('cat', 11, 12, true, 42, {}, function () { console.log('Hello world!'); })