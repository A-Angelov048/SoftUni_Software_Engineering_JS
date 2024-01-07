function generator(input) {

    let rowA = Number(input[0]);
    let rowB = Number(input[1]);
    let MaxPasswords = Number(input[2]);

    let countComb = 0;
    let allCombinatiots = '';
    let i = 35;
    let j = 64;

            for (let n = 1; n <= rowA; n++) {
                for (let u = 1; u <= rowB; u++) {

                    let A = String.fromCharCode(i);
                    let B = String.fromCharCode(j);
                    allCombinatiots += `${A}${B}${n}${u}${B}${A}` + '|';
                    i++;
                    j++;
                    countComb++

                    if (i > 55) {
                        i = 35;
                    }
                     
                    if (j > 96) {
                        j = 64;
                    }

                    if (countComb === MaxPasswords) {
                        console.log(allCombinatiots);
                        return;
                    }

                }
            }
            console.log(allCombinatiots);
        }
        
// generator(['2', '3', '10']);
generator(['20', '50', '10']);