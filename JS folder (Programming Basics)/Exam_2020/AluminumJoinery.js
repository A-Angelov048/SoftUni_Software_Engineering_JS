function alum(input){

    let numbAlum = Number(input[0]);
    let typeAlum = input[1];
    let delivery = input[2];

    let priceAlum = 0;
    let flag = true;

    if(numbAlum <= 10){
        flag = false;
        console.log("Invalid order");
    }

    switch(typeAlum){
        case "90X130":
            priceAlum = 110;
            priceAlum *= numbAlum;
            if (numbAlum > 30 && numbAlum < 60){
                priceAlum *= 0.95;
            } else if (numbAlum > 60){
                priceAlum *= 0.92;
            }
        break;

        case "100X150":
            priceAlum = 140;
            priceAlum *= numbAlum;
            if (numbAlum > 40 && numbAlum < 80){
                priceAlum *= 0.94;
            } else if (numbAlum > 80){
                priceAlum *= 0.9;
            } 
        break;

        case "130X180":
            priceAlum = 190;
            priceAlum *= numbAlum;
            if (numbAlum > 20 && numbAlum < 50){
                priceAlum *= 0.93;
            } else if (numbAlum > 50){
                priceAlum *= 0.88;
            }
        break;

        case "200X300":
            priceAlum = 250;
            priceAlum *= numbAlum;
            if (numbAlum > 25 && numbAlum < 50){
                priceAlum *= 0.91;
            } else if (numbAlum > 50){
                priceAlum *= 0.86;
            } 
        break;
}

if (delivery === "With delivery"){
    priceAlum += 60;
}

if (numbAlum > 99){
    priceAlum *= 0.96;
}

if (flag){
    console.log(`${priceAlum.toFixed(2)} BGN`);
}

}

alum(["2", "90X130", "Withoth delivery"]);