function position(input) {

    let nNumb = Number(input[0]);

    let evenMin = Number.MAX_SAFE_INTEGER;
    let evenMax = Number.MIN_SAFE_INTEGER;
    let oddMin = Number.MAX_SAFE_INTEGER;
    let oddMax = Number.MIN_SAFE_INTEGER;
    let evenSum = 0;
    let oddSum = 0;
    let evenOrOdd = 0;

    for (let i = 1; i <= nNumb; i++) {

        if (i % 2 === 1) {
            evenOrOdd = Number(input[i]);
            oddSum += evenOrOdd;

            if (evenOrOdd > oddMax) {
                oddMax = evenOrOdd;
            }
            if (evenOrOdd < oddMin) {
                oddMin = evenOrOdd;
            }

        } else if (i % 2 === 0) {
            evenOrOdd = Number(input[i]);
            evenSum += evenOrOdd;

            if (evenOrOdd > evenMax) {
                evenMax = evenOrOdd;
            }
            if (evenOrOdd < evenMin) {
                evenMin = evenOrOdd;
            }
        }

    }

    if (nNumb === 0) {
        console.log(`OddSum=${oddSum.toFixed(2)},`);
        console.log(`OddMin=No,`);
        console.log(`OddMax=No,`);
        console.log(`EvenSum=${evenSum.toFixed(2)},`);
        console.log(`EvenMin=No,`);
        console.log(`EvenMax=No`);
    } else if (nNumb === 1) {
        console.log(`OddSum=${oddSum.toFixed(2)},`);
        console.log(`OddMin=${oddMax.toFixed(2)},`);
        console.log(`OddMax=${oddMax.toFixed(2)},`);
        console.log(`EvenSum=${evenSum.toFixed(2)},`);
        console.log(`EvenMin=No,`);
        console.log(`EvenMax=No`);
    } else {
        console.log(`OddSum=${oddSum.toFixed(2)},`);
        console.log(`OddMin=${oddMin.toFixed(2)},`);
        console.log(`OddMax=${oddMax.toFixed(2)},`);
        console.log(`EvenSum=${evenSum.toFixed(2)},`);
        console.log(`EvenMin=${evenMin.toFixed(2)},`);
        console.log(`EvenMax=${evenMax.toFixed(2)}`);
    }
}

// position(["6", "2", "3", "5", "4", "2", "1"]);
// position(["2", "1.5", "-2.5"]);
// position(["1", "1"]);
// position(["0"]);
// position(["5", "3", "-2", "8", "11", "-3"]);
// position(["4", "1.5", "1.75", "1.5", "1.75"]);
// position(["1", "-5"]);
// position(["3", "-1", "-2", "-3"]);
// position(["5", "1.5", "-4.5", "7", "-8.5", "9",])
// position (["10", "-4.5", "3433.5", "-180.33", "323.2", "-55.55", "28.28", "-30.30", "44.44", "-77.77", "88.88"])