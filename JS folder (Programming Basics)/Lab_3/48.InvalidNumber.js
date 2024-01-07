function numb (input){

    let invalidNumb = Number(input[0]);

    if (invalidNumb >= 100 && invalidNumb <= 200 || invalidNumb === 0){
        
    } else {
        console.log("invalid");
    }

}

numb (["0"]);