function bigNumb(input) {

    let numb1 = Number(input[0]);
    let numb2 = Number(input[1]);

    if (numb1 > numb2) {
        console.log(numb1);
    } else {
        console.log(numb2);
    }
    

}

bigNumb(["5", "7"]);