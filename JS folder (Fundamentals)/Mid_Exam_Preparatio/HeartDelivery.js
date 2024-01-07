function heartDelivery(arr) {

    let arrOfHouse = arr.shift().split('@').map(Number);

    let arrOfHouseLength = arrOfHouse.length;
    let countHouse = 0;
    let houseIndex = 0;

    let i = 0;
    let command = arr[i];
    i++;

    while (command !== 'Love!') {

        let currentCommand = command.split(' ');
        houseIndex += Number(currentCommand[1]);

        if (houseIndex >= arrOfHouseLength) {
            houseIndex = 0;
        }

        if (arrOfHouse[houseIndex] === 0) {
            console.log(`Place ${houseIndex} already had Valentine's day.`);
        } else {
            arrOfHouse[houseIndex] -= 2;

            if (arrOfHouse[houseIndex] === 0) {
                countHouse++;
                console.log(`Place ${houseIndex} has Valentine's day.`);
            }
        }

        command = arr[i];
        i++;
    }

    console.log(`Cupid's last position was ${houseIndex}.`);

    if (arrOfHouseLength - countHouse === 0) {
        console.log("Mission was successful.");
    } else {
        let houseLeft = arrOfHouseLength - countHouse;
        console.log(`Cupid has failed ${houseLeft} places.`);
    }
}


heartDelivery(["10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love!"])

console.log('===========');

heartDelivery(["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"])
