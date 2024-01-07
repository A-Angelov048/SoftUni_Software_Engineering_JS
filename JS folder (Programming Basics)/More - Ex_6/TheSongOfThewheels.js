function theSong(input) {

    let controlValue = Number(input[0]);


    let possiblePassword = '';
    let password = ''
    let countPassword = 0;

    for (let a = 1; a <= 9; a++) {
        for (let b = 1; b <= 9; b++) {
            for (let c = 1; c <= 9; c++) {
                for (let d = 1; d <= 9; d++) {

                    if (a < b && c > d && a * b + c * d === controlValue) {
                        countPassword++;
                        possiblePassword += `${a}${b}${c}${d}` + ' ';

                        if (countPassword === 4) {
                            password = `${a}${b}${c}${d}`;
                        }
                    }
                }
            }
        }
    }

    if (possiblePassword === '') {
        possiblePassword = 'No!';
        console.log(possiblePassword);
        return;
    } else {
        console.log(possiblePassword);
    }
    if (password === '') {
        password = 'No!';
        console.log(password);
    } else {
        console.log(`Password: ${password}`);
    }

}

// theSong(['11']);
// theSong(['139']);
// theSong(['110']);
theSong(['55']);