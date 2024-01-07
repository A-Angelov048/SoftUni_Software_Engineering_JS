function diamond(input) {

    let numb = Number(input[0]);
    let digit = '';
    let rows = numb;
    let leftRightDashes = Math.floor((numb - 1) / 2);
    let midDashes = 0;
    let stars = numb - (leftRightDashes * 2);
    let midRows = Math.floor(numb / 2);

    // if numb is even minus 1 row!
    if (numb % 2 === 0) {
        rows = numb
        rows -= 1;
    }

    // loop diamond rows from numb
    for (let i = 1; i <= rows; i++) {

        // loop for left dashes
        for (let q = 1; q <= leftRightDashes; q++) {
            digit += '-';
        }
        // loop for first row of mid stars
        for (let a = 1; a <= stars; a++) {
            digit += '*';

            // loop for add mid dashes between the mid stars
            if (midDashes > 0 && a === 1) {
                if (i === 2 && numb % 2 === 1) {
                    midDashes--;
                }
                for (let p = 1; p <= midDashes; p++) {
                    digit += '-';
                }
            }
        }
        // loop for right dashes
        for (let z = 1; z <= leftRightDashes; z++) {
            digit += '-';
        }

        // if numb is odd incrementing mid dashes and decrementing left and right dashes
        if (i <= midRows && numb % 2 === 1) {
            digit += '\n'
            midDashes += 2;
            leftRightDashes--;
            if (stars === 1) {
                stars++;
            }
        // if numb is even incrementing mid dashes and decrementing left and right dashes   
        } else if (i < midRows && numb % 2 === 0) {
            digit += '\n'
            midDashes += 2;
            leftRightDashes--;
            if (stars === 1) {
                stars++;
            }
        // if numb is even or odd decrementing mid dashes and incrementing left and right dashes
        }else {
            digit += '\n'
            midDashes -= 2;
            leftRightDashes++;
            if (midDashes <= 0 && numb % 2 === 1) {
                stars--;
            }
        }
    }
    console.log(digit);
}

diamond(['3']);
diamond(['4']);
diamond(['5']);
diamond(['6']);
diamond(['7']);
diamond(['8']);
diamond(['9']);