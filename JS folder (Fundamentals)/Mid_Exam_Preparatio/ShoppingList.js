function shoppingList(arr) {

    let listWithGrocery = arr.shift().split('!')
    let remove = [];

    let i = 0;
    let command = arr[i]

    while (command !== 'Go Shopping!') {

        curentCommand = command.split(' ');

        switch (curentCommand[0]) {

            case 'Urgent':
                if (!listWithGrocery.includes(curentCommand[1])) {
                    listWithGrocery.unshift(curentCommand[1]);
                }
                break;

            case 'Unnecessary':
                if (listWithGrocery.includes(curentCommand[1])) {
                    let i = listWithGrocery.indexOf(curentCommand[1]);
                    remove = listWithGrocery.splice(i, 1);
                }
                break;

            case 'Correct':
                if (listWithGrocery.includes(curentCommand[1])) {
                    let i = listWithGrocery.indexOf(curentCommand[1]);
                    remove = listWithGrocery.splice(i, 1, curentCommand[2]);
                }
                break;

            case 'Rearrange':
                if (listWithGrocery.includes(curentCommand[1])) {
                    let i = listWithGrocery.indexOf(curentCommand[1]);
                    let rearrange = listWithGrocery.splice(i, 1);
                    listWithGrocery.push(rearrange);
                }
                break;
        }

        i++;
        command = arr[i];
    }
    console.log(listWithGrocery.join(', '));
}

shoppingList(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"])

console.log('---------------');
shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Meat",
    "Rearrange Meat",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])
console.log('--------------');