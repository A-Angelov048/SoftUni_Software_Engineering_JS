function christmasTree(input) {

    let numb = Number(input[0]);
    let digit = '';

    for (let i = 0; i <= numb; i++) {

        if (i === 0) {
            for (let vertical = 0; vertical <= numb; vertical++) {
                if (vertical === numb) {
                    digit += ' ' + '|';

                } else {
                    digit += ' ';
                }
            }
            digit += '\n';
            continue;
        }

        for (let j = 0; j < numb - i; j++) {
            digit += ' ';
        }
        for (let n = 1; n <= i; n++) {
            digit += '*'
        }

        digit += ' | ';

        for (let u = 1; u <= i; u++) {
            digit += '*'
        }
        for (let h = 0; h < numb - i; h++) {
            digit += ' ';
        }
        
        digit += '\n';
    }

    console.log(digit);

}

christmasTree(['1']);
christmasTree(['2']);
christmasTree(['3']);
christmasTree(['4']);