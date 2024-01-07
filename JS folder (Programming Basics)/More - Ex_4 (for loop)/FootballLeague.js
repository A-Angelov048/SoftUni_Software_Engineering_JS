function football(input){

    let capacityStadium = Number(input[0]);
    let numbFans = Number(input[1]);

    let sectorA = 0;
    let sectorB = 0;
    let sectorV = 0;
    let sectorG = 0;

    for (let i = 2; i <= numbFans + 1; i++){

       let sector = input[i];

       switch(sector){
        case "A": sectorA++; break;
        case "B": sectorB++; break;
        case "V": sectorV++; break;
        case "G": sectorG++; break;
       }
    }

    let averageSectorA = (sectorA / numbFans) * 100;
    let averageSectorB = (sectorB / numbFans) * 100;
    let averageSectorV = (sectorV / numbFans) * 100;
    let averageSectorG = (sectorG / numbFans) * 100;

    let averageCapacity = (numbFans / capacityStadium) * 100;

    console.log(`${averageSectorA.toFixed(2)}%`);
    console.log(`${averageSectorB.toFixed(2)}%`);
    console.log(`${averageSectorV.toFixed(2)}%`);
    console.log(`${averageSectorG.toFixed(2)}%`);
    console.log(`${averageCapacity.toFixed(2)}%`);

}

football (["76", "10", "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"]);