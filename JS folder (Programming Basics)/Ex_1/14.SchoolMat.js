function schoolAni(input){

    let numbPen = Number(input[0]) * 5.8;
    let numbMakers = Number(input[1]) * 7.2;
    let litersOfDetergent = Number(input[2]) * 1.2;
    let percent = Number(input[3]) / 100;

    let allStuffPrice  = numbPen + numbMakers + litersOfDetergent;
    let finalPrice = allStuffPrice - (allStuffPrice * percent);

    console.log(finalPrice);
}

schoolAni(["2", "3", "4", "25"]);




// •	Пакет химикали - 5.80 лв. 
// •	Пакет маркери - 7.20 лв. 
// •	Препарат - 1.20 лв (за литър)
