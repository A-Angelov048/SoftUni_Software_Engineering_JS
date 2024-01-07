function codes(input) {

    let numb1 = Number(input[0]);
    let numb2 = Number(input[1]);
    let numb3 = Number(input[2]);

    let n1 = 0;
    let n2 = 0;
    let n3 = 0;

    for (let i = 2; i <= numb1; i++) {
        if (i % 2 === 0) {
            n1 = i;
        } else {
            continue;
        }

        for (let j = 2; j <= numb2; j++) {
            if (j === 2 || j === 3 || j === 5 || j === 7) {
                n2 = j;
            } else {
                continue;
            }

            for (let n = 2; n <= numb3; n++) {
                if (n % 2 === 0) {
                    n3 = n;
                    console.log(`${n1} ${n2} ${n3}`);
                }
            }
        }
    }
}

codes(['3', '5', '5']);
// codes(['8', '2', '8']);