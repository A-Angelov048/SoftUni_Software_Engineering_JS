function numb(input){

    let nA = Number(input[0]);
    let nB = Number(input[1]);

    let result = 0;
    let buff = "";

    for (index = nA; nA <= nB; nA++){
         
        if (nA % 9 === 0){
            result += nA;
            buff += nA + "\n";
        }   
    }
    console.log(`The sum: ${result}`);
    console.log(buff);
}

numb(["100", "200"]);