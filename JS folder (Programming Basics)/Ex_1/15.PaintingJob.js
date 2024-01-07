function paint(input){

    let quantityOfNaylon = (Number(input[0]) + 2) * 1.50;
    let quantityOfPaint = Number(input[1]);
    quantityOfPaint = ((quantityOfPaint * 0.1) + quantityOfPaint) * 14.5;
    let quantityOfThinner = Number(input[2]) * 5;
    let hoursOfWork = Number(input[3]);

    totalPriceMaterials = quantityOfNaylon + quantityOfPaint + quantityOfThinner + 0.40;
    workPerHour = (totalPriceMaterials * 0.3) * hoursOfWork;

    totalPrice = totalPriceMaterials + workPerHour;

    console.log(totalPrice);


}

paint(["10", "11", "4", "8"]);

// •	Предпазен найлон - 1.50 лв. за кв. метър
// •	Боя - 14.50 лв. за литър
// •	Разредител за боя - 5.00 лв. за литър
