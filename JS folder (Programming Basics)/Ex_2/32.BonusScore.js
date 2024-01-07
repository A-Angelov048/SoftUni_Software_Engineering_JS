function score(input){

    let numb = Number(input[0]);
    let bonus = 0;

    if (numb <= 100){
        bonus = 5;

    } else if ( numb <= 1000){
        bonus = numb * 0.2;

    } else {
        bonus = numb * 0.1;
    }

    if (numb % 2 === 0){
        bonus = bonus + 1;

    } else if (numb % 10 === 5){
        bonus = bonus + 2;
    }

console.log(bonus);
console.log(numb + bonus);

}

score(["175"]);

