function sameNumbers(numb) {

    const numbToArr = numb.toString().split('');
    const sumNumb = numbToArr.map(Number).reduce((a, b) => a + b);
    const sameValue = numbToArr.shift();
    let flag = true;


    for (let i = 0; i < numbToArr.length; i++){

        if (sameValue !== numbToArr[i]){
            flag = false;
            break;
        }
    }

    if (flag){
        console.log(true);
    } else {
        console.log(false);
    }
    console.log(sumNumb);
}


sameNumbers(2222222);