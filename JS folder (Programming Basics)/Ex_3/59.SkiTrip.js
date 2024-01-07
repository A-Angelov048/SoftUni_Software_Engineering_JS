function trip(input){

    let days = Number(input[0]);
    let room = input[1];
    let rating = input[2];

    let sum = 0;

    switch (room){
        case "president apartment":
                if (days < 10){
                    sum = (days - 1) * 35;
                    sum *= 0.90;
                } else if (days >= 10 && days <=15) { 
                    sum = (days - 1) * 35;
                    sum *= 0.85;
                } else {
                    sum = (days - 1) * 35;
                    sum *= 0.80;
                } 
        break;

        case "apartment":
                if (days < 10){
                    sum = (days - 1) * 25;
                    sum *= 0.70;
                } else if (days >= 10 && days <=15) { 
                    sum = (days - 1) * 25;
                    sum *= 0.65;
                } else {
                    sum = (days - 1) * 25;
                    sum *= 0.50;
                } 
        break;

        case "room for one person": sum = (days - 1) * 18; break;
    }

    if (rating === "positive"){
        sum *= 1.25
        console.log(sum.toFixed(2));
    } else {
        sum *= 0.9
        console.log(sum.toFixed(2));
    }

}

trip(["10", "apartment", "positive"]);