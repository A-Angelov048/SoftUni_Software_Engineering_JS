function coins (input){

    let i = 0;
    let change = input[i];
    let coins = 0;
     
    while (change !== "0.00"){
        
        if (change>=2){
            change = (change - 2).toFixed(2);
            coins++;
            
        } else if (change>=1){
            change = (change - 1).toFixed(2);
            coins++;
            
        } else if (change>=0.5){
            change = (change - 0.5).toFixed(2);
            coins++;
            
        } else if (change>=0.2){
            change = (change - 0.2).toFixed(2);
            coins++;
            
        } else if (change>=0.1){
            change = (change - 0.1).toFixed(2);
            coins++;
            
        } else if (change>=0.05){
            change = (change - 0.05).toFixed(2);
            coins++;
            
        }else if (change>=0.02){
            change = (change - 0.02).toFixed(2);
            coins++;
           
        }else if (change>=0.01){
            change = (change - 0.01).toFixed(2);
            coins++;
    }
    }
       console.log(coins);
    }

coins (["1.23"])