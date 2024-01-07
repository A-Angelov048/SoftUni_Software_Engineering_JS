function dishwasher(input) {

    let i = 0;

    let detergent = Number(input[i]) * 750;
    i++;
    let command = input[i];

    let plate = 0;
    let pots = 0;

    while (command !== "End") {

        let dishes = Number(command);

        if (i % 3 === 0) {
            pots += dishes;
            dishes *= 15;
            detergent -= dishes;
        } else {
            plate += dishes;
            dishes *= 5;
            detergent -= dishes;
        }
        if (detergent < 0) {
            console.log(`Not enough detergent, ${Math.abs(detergent)} ml. more necessary!`);
            return;
        }

        i++;
        command = input[i];

    }

    console.log("Detergent was enough!");
    console.log(`${plate} dishes and ${pots} pots were washed.`);
    console.log(`Leftover detergent ${detergent} ml.`);
}

dishwasher(["2", "53", "65", "55", "End"]);
// dishwasher(["1", "10", "15", "10", "12", "13", "30"]);