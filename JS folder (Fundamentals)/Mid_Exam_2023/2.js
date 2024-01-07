function numbers(arr) {

    let arrToModify = arr.shift().split(' ').map(Number);

    let i = 0;
    let command = arr[i];
    i++;

    while (command !== 'Finish') {

        let currentCommand = command.split(' ');
        let valueOfNumb = Number(currentCommand[1]);
        let replacement = Number(currentCommand[2]);

        switch (currentCommand[0]) {

            case 'Add':
                arrToModify.push(valueOfNumb);
                break;

            case 'Remove':
                if (arrToModify.includes(valueOfNumb)) {
                    arrToModify.splice(arrToModify.indexOf(valueOfNumb), 1);
                }
                break;

            case 'Replace':
                if (arrToModify.includes(valueOfNumb)) {
                    arrToModify.splice(arrToModify.indexOf(valueOfNumb), 1, replacement);
                }
                break;

            case 'Collapse':
                arrToModify = arrToModify.filter(el => el >= valueOfNumb);

                // wrong way messes up the indexes.
                // arrToModify.forEach((value, index) => {
                //     if (value <= valueOfNumb) {
                //         arrToModify.splice(index, 1);
                //     }
                // })
                break;
        }
        command = arr[i];
        i++;
    }

    console.log(arrToModify.join(' '));
}

numbers(["1 4 5 19", "Add 1", "Remove 4", "Finish"]);
console.log('==========');

numbers(["1 20 -1 2 3 15 4 5 11 6 7 7 8 10", "Collapse 8", "Finish"])
console.log('==========');

numbers(["5 9 70 -56 9 9", "Replace 9 10", "Remove 9", "Finish"])
console.log('==========');