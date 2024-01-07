function maxNumb(input){

    let numb1 = Number.MIN_SAFE_INTEGER;
    let i = 0;
    let numb = input[i];
    
    while (numb !== "Stop"){

        numb = Number(input[i]);
        if (numb > numb1){
            numb1 = numb;
        }
        i++;
        numb = String(input[i]);
    }
    console.log(numb1);

}

maxNumb (["-1",
"-2",
"Stop"])




