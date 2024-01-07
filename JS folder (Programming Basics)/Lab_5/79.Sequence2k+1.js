function sequence(input){

    let numb = Number(input[0]);
    let check = 1;

    while (check <= numb){
        console.log(check);
        check *= 2;
        check += 1;
    }
}

sequence (["31"]);