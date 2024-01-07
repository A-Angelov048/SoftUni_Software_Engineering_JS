function movingTarget(arr) {

    let arrOfTargets = arr.shift().split(' ').map(Number);
    let i = 0
    let command = arr[i];
    i++;

    while (command !== 'End') {

        let manipulation = command.split(' ');
        let index = Number(manipulation[1]);
        let currentCommand = Number(manipulation[2]);

        switch (manipulation[0]) {

            case 'Shoot':
                if (index >= 0 && index <= arrOfTargets.length - 1) {
                    arrOfTargets[index] = arrOfTargets[index] - currentCommand;

                    if (arrOfTargets[index] <= 0) {
                        arrOfTargets.splice(index, 1);
                    }
                }
                break;

            case 'Add':
                if (index >= 0 && index <= arrOfTargets.length - 1) {
                    arrOfTargets.splice(index, 0, currentCommand);
                } else {
                    console.log('Invalid placement!');
                }
                break;

            case 'Strike':
                if (index - currentCommand >= 0 && currentCommand * 2 + 1 <= arrOfTargets.length) {
                    arrOfTargets.splice(index - currentCommand, currentCommand * 2 + 1);
                } else {
                    console.log('Strike missed!');
                }
                break;
        }
        command = arr[i];
        i++;
    }
    if (arrOfTargets.length !== 0)
        console.log(arrOfTargets.join('|'));
}

movingTarget(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 2",
    "Add 22 3",
    "End"])

console.log('----------------');
movingTarget(["1 2 3 4 5",
    "Strike 0 1",
    "End"])
console.log('----------------');