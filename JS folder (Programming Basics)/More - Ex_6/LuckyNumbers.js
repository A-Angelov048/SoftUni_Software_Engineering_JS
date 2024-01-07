function lcNumber(input) {

    let numb = Number(input[0]);

    let flag = true;
    let count = 0;
    let sum1 = ''
    let sum2 = ''
    let happyNumb = '';

    for (let i = 1000; i <= 9999; i++) {

        let almostHappyNumb = String(i)

        for (let j = 0; j < almostHappyNumb.length; j++) {

            let digit = Number(almostHappyNumb.charAt(j));
            count++;

            if (digit === 0) {
                flag = false;
                break;
            }

            if (count <= 2) {
                sum1 += digit;
            } else {
                sum2 += digit;
            }
        }

        if (numb % sum2 === 0) {

            if (sum1 === numb && sum2 === numb && flag) {
                happyNumb += `${i}` + ' ';
            
            } else if (sum1 === sum2 && flag){
                happyNumb += `${i}` + ' ';
            }
        } 
        
        count = 0;
        sum1 = 0;
        sum2 = 0;
        flag = true

    }
    console.log(happyNumb);
}

lcNumber(['24']);