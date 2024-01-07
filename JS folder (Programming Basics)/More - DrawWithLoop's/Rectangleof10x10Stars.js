function rectangleOf10() {

    let count = 0;
    let star = '';

    for (let i = 1; i <= 100; i++) {

        count++;
        star += '*' + '';

        if (count === 10) {
            count = 0;
            star += '\n';
        }
    }
    console.log(star);
}

rectangleOf10([]);