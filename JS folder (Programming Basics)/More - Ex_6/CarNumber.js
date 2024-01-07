function car(input) {

    let startNumb = Number(input[0]);
    let endNumb = Number(input[1]);

    let finalNumb = '';


    for (let i = startNumb; i <= endNumb; i++) {
        for (let j = startNumb; j <= endNumb; j++) {
            for (let n = startNumb; n <= endNumb; n++) {
                for (let u = startNumb; u <= endNumb; u++) {

                    if (i % 2 === 0 && u % 2 === 1 || i % 2 === 1 && u % 2 === 0) {
                        if (i > u) {
                            if ((j + n) % 2 === 0){
                                finalNumb += `${i}${j}${n}${u}` + ' ';
                            }
                        } 
                    }

                }
            }
        }
    }

    console.log(finalNumb);

}

car(['3', '5']);