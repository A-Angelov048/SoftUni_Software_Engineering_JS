function SquareOfStars(input) {

    let n = Number(input[0]);
    let count = 0;
    let star = '';

    for (let i = 1; i <= n * n; i++) {

        count++;
        star += '*' + ' ';

        if (count === n) {
            count = 0;
            star += '\n';
        }
    }
    console.log(star);
}

SquareOfStars(['2']);
SquareOfStars(['3']);
SquareOfStars(['4']);