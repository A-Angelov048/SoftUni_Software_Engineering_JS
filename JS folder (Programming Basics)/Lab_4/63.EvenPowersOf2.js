function even(input){

    let n = Number(input[0]);
    
    for (index = 0; index <= n ; index += 2 ){
        console.log(Math.pow(2,index));
    }
}

even(["4"]);