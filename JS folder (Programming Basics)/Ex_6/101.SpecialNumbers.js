function specNumb(input){

    let numb = Number(input[0]);
    let numbStart = 1111;
    let numbFinish = 9999;
    let print = "";
   
    for(let i = numbStart; i <= numbFinish; i++){
        
        let name = "" + i;
        let countDigit = 0;

        for(let j = 0; j < name.length; j++){

            let digit = Number(name.charAt(j))

            if (numb % digit === 0){
                countDigit++;
            }
            if (countDigit === 4){
                print += `${i} `
                countDigit = 0;
            }
        }
    }

console.log(print);

}

specNumb (["16"]);