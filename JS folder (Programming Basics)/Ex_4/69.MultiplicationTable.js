function table(input){

    let n = Number(input[0]);
     
    for (index = 1; index <= 10; index++){
       let finalSum = index * n;
       console.log(`${index} * ${n} = ${finalSum}`);
    }

    
}

table(["10"]);