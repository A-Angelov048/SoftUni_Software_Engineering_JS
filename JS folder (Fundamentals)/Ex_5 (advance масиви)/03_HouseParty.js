function houseParty(arr) {

    let guestsList = [];
    let arrLength = arr.length;

    for (let i = 0; i < arrLength; i++) {

        let command = arr[i]

        if (command.includes('is going!')) {

            let name = command.split(' ');
            if (!guestsList.includes(name[0])) {
                guestsList.push(name[0]);
            } else {
                console.log(`${name[0]} is already in the list!`);
            }

        } else if (command.includes('is not going!')){

            let name = command.split(' ');
            if (guestsList.includes(name[0])) {
            //    let index = guestsList.indexOf(name[0])
            //    guestsList.splice(index, 1)
            guestsList = guestsList.filter(a => a !== name[0])
            } else {
                console.log(`${name[0]} is not in the list!`);
            }
        }
    }
console.log(guestsList.join('\n'));
}

houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']);