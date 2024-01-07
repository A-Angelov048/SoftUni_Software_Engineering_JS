function sunGlasses(input) {

    let numb = Number(input[0]);
    let digit = '';
    let rows = Math.floor((numb - 1) / 2 - 1);

    for (let i = 1; i <= 3; i++) {

// first row && last row
        if (i === 1 || i === 3) {

            for (let q = 1; q <= numb * 2; q++) {
                digit += '*';
            }
            for (let a = 1; a <= numb; a++) {
                digit += ' ';
            }
            for (let z = 1; z <= numb * 2; z++) {
                digit += '*';
            }
            digit += '\n';

// Mid rows
        } else {

            for (let j = 1; j <= numb - 2; j++) {
                if (rows + 1 === j) {
                    for (let w = 1; w <= numb * 2; w++) {
                        if (w === 1 || w === numb * 2) {
                            digit += '*';
                        } else {
                            digit += '/';
                        }
                    }
                    for (let s = 1; s <= numb; s++) {
                        digit += '|';
                    }
                    for (let x = 1; x <= numb * 2; x++) {
                        if (x === 1 || x === numb * 2) {
                            digit += '*';
                        } else {
                            digit += '/';
                        }
                    }
                } else {
                    for (let e = 1; e <= numb * 2; e++) {
                        if (e === 1 || e === numb * 2) {
                            digit += '*';
                        } else {
                            digit += '/';
                        }
                    }
                    for (let d = 1; d <= numb; d++) {
                        digit += ' ';
                    }
                    for (let c = 1; c <= numb * 2; c++) {
                        if (c === 1 || c === numb * 2) {
                            digit += '*';
                        } else {
                            digit += '/';
                        }
                    }
                }
                digit += '\n';
            }
        }
    }
    console.log(digit);
}

sunGlasses(['3']);
sunGlasses(['4']);
sunGlasses(['5']);
sunGlasses(['6']);