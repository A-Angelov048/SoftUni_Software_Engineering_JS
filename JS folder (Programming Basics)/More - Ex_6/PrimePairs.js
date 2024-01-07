function primePair(input) {

    let startPrime = Number(input[0]);
    let endPrime = Number(input[1]);
    let addStartPrime = Number(input[2]);
    let addEndPrime = Number(input[3]);

    addStartPrime += startPrime;
    addEndPrime += endPrime;

    for (let i = startPrime; i <= addStartPrime; i++) {
        for (let j = endPrime; j <= addEndPrime; j++) {

            let flag = true;

            for (let n = 2; n < i; n++) {

                if (i % n === 0) {
                    flag = false;
                    break;
                }

            }

            for (let n = 2; n < j; n++) {
                if (j % n === 0) {
                    flag = false;
                    break;
                }
            }

            if (flag) {
                console.log(`${i}${j}`);
            }
        }
    }
}

primePair(['10', '30', '9', '6']);