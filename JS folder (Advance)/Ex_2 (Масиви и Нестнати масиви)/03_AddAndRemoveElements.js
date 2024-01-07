function addAndRemoveElements(data) {

    let newArr = [];
    let inNumber = 0;

    let objCommands = {

        add: (a) => {
            newArr.push(a);
        }
        , remove: (a) => {
            newArr.pop(a);
        }
    }

    for (let line of data) {

        inNumber++;
        objCommands[line](inNumber);
    }
    newArr.length === 0 ? console.log('Empty') : console.log(newArr.join('\n'));
}

addAndRemoveElements(['add',
    'add',
    'add',
    'add']
);
console.log('============');

addAndRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add']
);
console.log('============');

addAndRemoveElements(['remove',
    'remove',
    'remove']
);
console.log('============');