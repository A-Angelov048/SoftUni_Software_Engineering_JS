function rhombusOfStars(input) {

    let numb = Number(input[0]);
    let digit = '';

    for (let i = 1; i <= numb; i++) {

        for (let j = 1; j <= numb - i; j++) {
            digit += ' ';
        }
        for (let n = 1; n <= i; n++) {
            digit += '*' + ' ';
        }
        digit += '\n';
    }

    for (let u = 1; u <= numb - 1; u++) {

        for (let h = 1; h <= u; h++) {
            digit += ' ';
        }
        for (let b = 1; b <= numb - u; b++) {
            digit += '*' + ' ';
        }
        digit += '\n';
    }

    console.log(digit);
}

rhombusOfStars(['1']);
rhombusOfStars(['2']);
rhombusOfStars(['3']);
rhombusOfStars(['4']);
rhombusOfStars(['5']);
rhombusOfStars(['6']);
rhombusOfStars(['7']);
rhombusOfStars(['8']);
rhombusOfStars(['9']);
rhombusOfStars(['10']);