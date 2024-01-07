function agency(input){

    let nameOfAgency = input[0];
    let numbOfTicketsAdults = Number(input[1]);
    let numbOfTicketsKids = Number(input[2]);
    let priceTicket = Number(input[3]);
    let priceService = Number(input[4]);

    let finalPriceA = priceTicket + priceService;
    let finalPriceK = (priceTicket * 0.3) + priceService;
    let finalPrice = ((numbOfTicketsAdults * finalPriceA) + (numbOfTicketsKids * finalPriceK)) * 0.2;
    
    console.log(`The profit of your agency from ${nameOfAgency} tickets is ${finalPrice.toFixed(2)} lv.`);
    
}

agency (["WizzAir", "15", "5", "120", "40"]);