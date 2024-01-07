function minNumber(input){

    let numb1 = Number.MAX_SAFE_INTEGER;
    let i = 0;
    let numb = input[i];
    
    while (numb !== "Stop"){

        numb = Number(input[i]);
        if (numb < numb1){
            numb1 = numb;
        }
        i++;
        numb = String(input[i]);
    }
    console.log(numb1);

}

minNumber(["100",
"99",
"80",
"70",
"Stop"])