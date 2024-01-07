function room(input){

    let mount = input[0];
    let numbOfNights = Number(input[1]);

    let priceForStudio = 0;
    let priceForApartment = 0; 
    
    switch (mount){

        case "May":
            priceForStudio = numbOfNights * 50;
            priceForApartment = numbOfNights * 65; break;
        case "June":
            priceForStudio = numbOfNights * 75.20;
            priceForApartment = numbOfNights * 68.70; break;
        case "July":
            priceForStudio = numbOfNights * 76;
            priceForApartment = numbOfNights * 77; break;
        case "August":
            priceForStudio = numbOfNights * 76;
            priceForApartment = numbOfNights * 77; break;
        case "September":
            priceForStudio = numbOfNights * 75.20;
            priceForApartment = numbOfNights * 68.70; break;
        case "October":
            priceForStudio = numbOfNights * 50;
            priceForApartment = numbOfNights * 65; break;
    }

    if (mount === "May" || mount === "October"){
        if (numbOfNights > 7 && numbOfNights <= 14){
        priceForStudio *= 0.95;
        } else if (numbOfNights > 14){
        priceForStudio *= 0.70;
        }

    } else if (mount === "June" || mount === "September"){
        if (numbOfNights > 14) {
        priceForStudio *= 0.80;
        }

    } if (mount) {
        if (numbOfNights > 14){
        priceForApartment *= 0.90;
        }
    }

    console.log(`Apartment: ${priceForApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${priceForStudio.toFixed(2)} lv.`);

}

room (["August", "20"]);