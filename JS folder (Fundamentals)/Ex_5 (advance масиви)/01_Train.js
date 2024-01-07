function train(arr) {

    let wagonArr = arr[0].split(' ').map(Number);
    let wagonArrLength = wagonArr.length;
    let capacityWagon = Number(arr[1]);
    let arrLength = arr.length;

    for (let i = 2; i < arrLength; i++) {

        let command = arr[i].split(' ');

        if (command[0] === 'Add') {
            wagonArr.push(command[1]);
        } else {

            for (let j = 0; j < wagonArrLength; j++) {

                if (wagonArr[j] + Number(command) <= capacityWagon) {
                    wagonArr[j] += Number(command);
                    break;
                }
            }
        }
    }
    console.log(wagonArr.join(' '));
}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']);