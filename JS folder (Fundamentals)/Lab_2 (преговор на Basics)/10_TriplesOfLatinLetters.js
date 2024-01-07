function latin(numb) {

    numb = Number(numb);

    for (let i = 97; i < 97 + numb; i++) {
        for (let j = 97; j < 97 + numb; j++){
            for (let n = 97; n < 97 + numb; n++){

                console.log(`${String.fromCharCode(i)}${String.fromCharCode(j)}${String.fromCharCode(n)}`);
            }
        }
    }
}

latin('2');
console.log('------');
latin('3');