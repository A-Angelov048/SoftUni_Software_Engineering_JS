function numb(input){

    let n = String(input[0]);
    let sum = 0;

    for (index = 0; index < n.length; index++){
        sum += Number(n[index]);
    }
    console.log(`The sum of the digits is:${sum}`);
}

numb(["564891"]);