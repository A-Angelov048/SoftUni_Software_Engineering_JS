function SquareFrame(input) {

    let frame = Number(input[0]);
    let digit = '';

    for (let i = 1; i <= frame; i++) {

        if(i === 1 || i === frame){
            digit += '+' + ' ';
        } else {
            digit += '|' + ' ';
        }

        for (let j = 1; j <= frame - 2; j++) {
            digit += "-" + ' ';
        }

        if(i === 1 || i === frame){
            digit += '+' + ' ';
            digit += '\n';
        } else {
            digit += '|' + ' ';
            digit += '\n';
        }
    }
    console.log(digit);
}

SquareFrame(['3']);
SquareFrame(['4']);
SquareFrame(['5']);
SquareFrame(['6']);