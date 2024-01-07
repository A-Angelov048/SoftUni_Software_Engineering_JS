function equalPairs(input) {

    let allPair = Number(input[0]) * 2;

    let pair1 = 0;
    let pair2 = 0;
    let value = 0;
    let maxDiff = 0;
    
    for (let i = 1; i <= allPair; i++) {

        let numb1 = Number(input[i]);
        i++;
        let numb2 = Number(input[i])
        i++;
        pair1 = numb1 + numb2;

        if (i <= allPair) {
            let numb3 = Number(input[i]);
            i++;
            let numb4 = Number(input[i])
            pair2 = numb3 + numb4;
        }
    }

    if (pair1 === pair2 || allPair === 2 ) {
        value = pair1;
        console.log(`Yes, value=${value}`);
    } else {
        maxDiff = pair1 - pair2;
        console.log(`No, maxdiff=${Math.abs(maxDiff)}`);
    }
}

    equalPairs(["3", "1", "2", "0", "3", "4", "-1"]);
    equalPairs(["4", "1", "1", "3", "1", "2", "2", "0", "0"]);
    equalPairs(["1", "5", "5"]);