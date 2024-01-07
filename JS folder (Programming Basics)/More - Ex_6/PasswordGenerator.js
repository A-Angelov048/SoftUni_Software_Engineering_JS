function passwordGenerator(input) {

    let nNumb = Number(input[0]);
    let lNumb = Number(input[1]) + 97;

    let allPasswords = '';


    for (let i = 1; i <= nNumb; i++) {
        for (let j = 1; j < nNumb; j++) {
            for (let n = 97; n < lNumb; n++) {
                for (let u = 97; u < lNumb; u++) {

                    let biggerNumber = 0;
                    if (i > j){
                        biggerNumber = i;
                    }else {
                        biggerNumber = j;
                    }
                    for (let h = biggerNumber + 1; h <= nNumb; h++) {


                        let password = `${i}${j}${String.fromCharCode(n)}${String.fromCharCode(u)}${h}`;
                        allPasswords += password + ' ';
                        
                    }
                }
            }
        }
    }
console.log(allPasswords);
}

passwordGenerator(['2', '4']);