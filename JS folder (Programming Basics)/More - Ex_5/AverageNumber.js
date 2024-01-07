function averageNumber(input){

    let numb = Number(input[0]);
    let sumNumb = 0;

    for (let i = 1; i <= numb; i++){

        sumNumb += Number(input[i]);
    }

    sumNumb /= numb;
    console.log(sumNumb.toFixed(2));

}

averageNumber(["4", "3", "2", "4", "2"]);