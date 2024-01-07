function numb(input){

    let numb1 = Number(input[0]);

    let i = 1;
    let numb2 = Number(input[i]);
    i++
    

    while (numb2 < numb1){
        numb2 = Number(input[i]) + numb2;
        i++;
        
    }
    console.log(numb2);

}

numb (["20",
"1",
"2",
"3",
"4",
"5",
"6"])
