function shootForTheWin(arr) {

    let arrIntegers = arr.shift().split(' ').map(Number);
    let count = 0;

    let i = 0;
    let command = arr[i];
    i++;


    while (command !== 'End') {

        let index = Number(command);

        if (index >= 0 && index <= arrIntegers.length - 1) {

            count++;
            let currentIndex = Number(arrIntegers.splice(index, 1, -1).join());

            // for (let i = 0; i < arrIntegers.length; i++) {

            //     if (currentIndex < arrIntegers[i] && arrIntegers[i] !== -1) {
            //         arrIntegers[i] -= currentIndex;
            //     } else if (currentIndex >= arrIntegers[i] && arrIntegers[i] !== -1){
            //         arrIntegers[i] += currentIndex;
            //     }
            // }
            arrIntegers.forEach((item, index) => {

                if (currentIndex < item && item !== -1) {
                    arrIntegers[index] -= currentIndex;
                } else if (currentIndex >= item && item !== -1) {
                    arrIntegers[index] += currentIndex;
                }
            })
        }
        command = arr[i];
        i++;
    }
    console.log(`Shot targets: ${count} -> ${arrIntegers.join(' ')}`);
}

shootForTheWin(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"])

console.log('=============');

shootForTheWin(["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"])
