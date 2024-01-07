function logistics(input){

    let numbCargo = Number(input[0]);

    let tonesForMicrobus = 0;
    let priceForMicrobus = 200;

    let tonesForTruck = 0;
    let priceForTruck = 175;

    let tonesForTrain = 0;
    let priceForTrain = 120;
    
    for(let i = 1; i <= numbCargo; i++){

        let tonPerCargo = Number(input[i]);

        if (tonPerCargo <= 3){
            tonesForMicrobus += tonPerCargo;
        } else if (tonPerCargo <= 11){
            tonesForTruck += tonPerCargo;
        } else {
            tonesForTrain += tonPerCargo;
        }

    }

    let allTones = tonesForMicrobus + tonesForTruck + tonesForTrain;
    let averagePrice = (tonesForMicrobus * priceForMicrobus + tonesForTruck * priceForTruck + tonesForTrain * priceForTrain) / allTones;

    let percentTonForMicrobus = (tonesForMicrobus / allTones) * 100;
    let percentTonForTruck = (tonesForTruck / allTones) * 100;
    let percentTonForTrain = (tonesForTrain / allTones) * 100;

    console.log(averagePrice.toFixed(2));
    console.log(`${percentTonForMicrobus.toFixed(2)}%`);
    console.log(`${percentTonForTruck.toFixed(2)}%`);
    console.log(`${percentTonForTrain.toFixed(2)}%`);

}

logistics(["4", "1", "5", "16", "3"]);
logistics(["5", "2", "10", "20", "1", "7"]);