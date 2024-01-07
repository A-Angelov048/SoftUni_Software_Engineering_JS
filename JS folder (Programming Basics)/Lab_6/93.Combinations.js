function comb(input){

    let maxNumb = Number(input[0]);
    let combination = 0;

    for(let n1 = 0; n1 <= maxNumb; n1++){
        for(let n2 = 0; n2 <= maxNumb; n2++){
            for(let n3 = 0; n3 <= maxNumb; n3++){
                let result = n1 + n2 + n3;
                while(result === maxNumb){
                    combination++;
                    break;
                }
            }
        }
    }
    console.log(combination);
}

comb(["5"]);