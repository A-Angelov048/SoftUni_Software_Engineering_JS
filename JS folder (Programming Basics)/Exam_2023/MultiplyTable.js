function multiplyTable(input){

    input = input.toString();

    let firstNumb = Number(input[2]);
    let secondNumb = Number(input[1]);
    let thirdNumb = Number(input[0]);

    for(i = 1; i <= firstNumb; i++){
        for(j = 1; j <= secondNumb; j++){
            for(m = 1; m <= thirdNumb; m++){
                let total = i * j * m;
                console.log(`${i} * ${j} * ${m} = ${total};`);
            }
        }
    }
}

multiplyTable(324)