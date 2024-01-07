function sumDigits(numb){

    numb = String(numb);
    let sum = 0;

    for (let i = 0; i < numb.length; i++){

        sum += Number(numb[i]);
    }
    console.log(sum);
}

sumDigits(245678);
console.log('--------');
sumDigits(97561);
console.log('--------');
sumDigits(543);
console.log('--------');