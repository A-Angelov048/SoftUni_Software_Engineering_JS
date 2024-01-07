function piccolo(data) {

    let parking = {}

    for (let i of data) {

        let [command, carNumber] = i.split(', ');

        switch (command) {

            case 'IN': parking[carNumber] = command; break
            case 'OUT': delete parking[carNumber]; break
        }
    }

    let sort = Object.entries(parking).sort();

    if (sort.length === 0){
        console.log('Parking Lot is Empty');
        return
    }

    for (let el of sort){
        console.log(el[0]);
    }
}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA'])