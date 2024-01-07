function position(input){

    let startNumb = Number(input[0]);
    let endNumb = Number(input[1]);
    let print = '';

    for(i = startNumb; i <= endNumb; i++){

        let num = "" + i;
        let evenNumb = 0;
        let oddNumb = 0;

        for(let a = 0; a < num.length; a++){
            
            let digit = Number(num.charAt(a));
            if (a % 2 === 0){
                evenNumb += digit;
            } else {
                oddNumb += digit;
            }
        }
        if (evenNumb === oddNumb){
            print += `${i} `;
        }
    }
    console.log(print);
}

position(["100000",
"100050"])

