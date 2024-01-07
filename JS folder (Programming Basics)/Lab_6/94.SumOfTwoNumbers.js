function sumOfTwoNumbers(input){

    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let magicNumb = Number(input[2]);
    let combination = 0;
    flag = false;
    
    
    for(let x = n1; x <= n2; x++){
        for(let y = n1; y <= n2; y++){
            combination++;
            let result = x + y;
            if(result === magicNumb){
                flag = true;
                console.log(`Combination N:${combination} (${x} + ${y} = ${magicNumb})`);
                break;
        }
    }
    
    if(flag){
        break;
    }
        
    }
    
    if(!flag)
        console.log(`${combination} combinations - neither equals ${magicNumb}`);
    }    

    
        
        
    
   
sumOfTwoNumbers (["1",
"10",
"5"])






