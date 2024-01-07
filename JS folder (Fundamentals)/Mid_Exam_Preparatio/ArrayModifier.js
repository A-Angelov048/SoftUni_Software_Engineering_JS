function arrayModifier(arr) {

    let arrToModifier = arr.shift().split(' ');
    let i = 0;
    let command = arr[i].split(' ');

    while (command[0] !== 'end') {

        let modifier = command

        switch (modifier[0]) {

            case 'swap':
                [arrToModifier[modifier[1]], arrToModifier[modifier[2]]] = [arrToModifier[modifier[2]], arrToModifier[modifier[1]]];
                break;
            case 'multiply':
                let sum = arrToModifier[modifier[1]] * arrToModifier[modifier[2]]
                arrToModifier.splice(modifier[1], 1, sum);
                break;
            case 'decrease':
                let decrease = arrToModifier.map(i => i - 1);
                arrToModifier = decrease;
                break;
        }
        i++;
        command = arr[i].split(' ');
    }
    console.log(arrToModifier.join(', '));
}


arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]
);
console.log('----------');
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]
);
console.log('---------');
