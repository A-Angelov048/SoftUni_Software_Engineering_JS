function house(input) {

    let numb = Number(input[0]);
    let digit = '';
    let roofRows = Math.floor((numb + 1) / 2);
    let baseRows = numb - roofRows;
    let starsOdd = 1;
    let starsEven = 2;


//the roof of the house
    for (let i = 1; i <= roofRows; i++) {

        //even numb
        if (numb % 2 === 0) {
            for (let q = 1; q <= (numb - starsEven) / 2; q++) {
                digit += '-';
            }
            for (let a = 1; a <= starsEven; a++) {
                digit += '*';
            }
            for (let z = 1; z <= (numb - starsEven) / 2; z++) {
                digit += '-';
            }
            digit += '\n';
            starsEven += 2;

        //odd numb
        } else if (numb % 2 === 1) {
            for (let w = 1; w <= (numb - starsOdd) / 2; w++) {
                digit += '-';
            }
            for (let s = 1; s <= starsOdd; s++) {
                digit += '*';
            }
            for (let x = 1; x <= (numb - starsOdd) / 2; x++) {
                digit += '-';
            }
            digit += '\n';
            starsOdd += 2;
        }
    }

//the foundation of the house
    for (let j = 1; j <= baseRows; j++) {
        for (let e = 1; e <= 1; e++) {
            digit += '|';
        }
        for (let e = 1; e <= numb - 2; e++) {
            digit += '*';
        }
        for (let e = 1; e <= 1; e++) {
            digit += '|';
        }
        digit += '\n';
    }
    console.log(digit);
}

house(['2']);
house(['3']);
house(['4']);
house(['5']);
house(['6']);