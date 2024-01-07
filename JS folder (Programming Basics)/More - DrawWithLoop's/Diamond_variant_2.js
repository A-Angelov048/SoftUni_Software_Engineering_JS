function diamond2(input) {

    let numb = Number(input[0]);
    let digit = '';
    let leftRightDashes = Math.floor((numb - 1) / 2);
    let stars = numb - (leftRightDashes * 2);
    let midDashes = 0;
    let rows = numb;

    // if numb is even minus 1 row!
    if (numb % 2 === 0) {
        rows = numb
        rows--;
    }

    let midRows = Math.floor(rows / 2);

    for (let i = 1; i <= 3; i++) {

        if (i === 3) {
            leftRightDashes++;
        }
        // first row && last row
        if (i === 1 || i === 3 && numb > 2) {

            for (let q = 1; q <= leftRightDashes; q++) {
                digit += '-';
            }
            for (let a = 1; a <= stars; a++) {
                digit += '*';
            }
            for (let z = 1; z <= leftRightDashes; z++) {
                digit += '-';
            }
            digit += '\n';
        // mid rows
        } else {

            for (let j = 1; j <= rows - 2; j++) {
                if (j <= midRows) {
                    leftRightDashes--;
                    midDashes = numb - 2 * leftRightDashes - 2;
                    for (let w = 1; w <= leftRightDashes; w++) {
                        digit += '-';
                    }
                    for (let s = 1; s <= 2; s++) {
                        digit += '*';
                        if (s === 1) {
                            for (let x = 1; x <= midDashes; x++) {
                                digit += '-';
                            }
                        }
                    }
                    for (let e = 1; e <= leftRightDashes; e++) {
                        digit += '-';
                    }
                    digit += '\n';
                } else {
                    leftRightDashes++;
                    midDashes = numb - 2 * leftRightDashes - 2;
                    for (let d = 1; d <= leftRightDashes; d++) {
                        digit += '-';
                    }
                    for (let c = 1; c <= 2; c++) {
                        digit += '*';
                        if (c === 1) {
                            for (let r = 1; r <= midDashes; r++) {
                                digit += '-';
                            }
                        }
                    }
                    for (let f = 1; f <= leftRightDashes; f++) {
                        digit += '-';
                    }
                    digit += '\n';
                }
            }
        }
    }
    console.log(digit);
}

diamond2(['1']);
diamond2(['2']);
diamond2(['3']);
diamond2(['4']);
diamond2(['5']);
diamond2(['6']);
diamond2(['7']);
diamond2(['8']);
diamond2(['9']);