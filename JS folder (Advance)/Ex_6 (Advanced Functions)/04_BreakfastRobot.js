function solution() {

    const recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    }

    const productWarehouse = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    return function manager(data) {

        let [curCommand, elementOne, elementTwo] = data.split(' ');
        elementTwo = Number(elementTwo);

        switch (curCommand) {
            case 'restock': productWarehouse[elementOne] += elementTwo; return 'Success';

            case 'prepare':
                let curMeal = JSON.parse(JSON.stringify(recipes[elementOne]));
                for (let line in curMeal) {
                    curMeal[line] *= elementTwo;
                    if (curMeal[line] > productWarehouse[line]) {
                        return `Error: not enough ${line} in stock`;
                    }
                }

                for (let line in curMeal) {
                    productWarehouse[line] -= curMeal[line];
                }
                return 'Success';

            case 'report':
                let result = '';
                for (let line in productWarehouse) {
                    result += `${line}=${productWarehouse[line]} `;
                }
                return result.trim();
        }
    }
}


solution()


let manager = solution();
console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
console.log(manager("restock carbohydrate 10")); // Success  
console.log(manager("restock flavour 10")); // Success 
console.log(manager("prepare apple 1")); // Success 
console.log(manager("restock fat 10")); // Success 
console.log(manager("prepare burger 1")); // Success 
console.log(manager("report")); // protein=0 carbohydrate=4 fat=3 flavour=55

//======================================================================================================================

// console.log(manager("prepare turkey 1")); // Error: not enough carbohydrate in stock
// console.log(manager("restock protein 10")); // Success
// console.log(manager("prepare turkey 1")); // Error: not enough carbohydrate in stock
// console.log(manager("restock carbohydrate 10.5")); // Success
// console.log(manager("prepare turkey 1")); // Error: not enough carbohydrate in stock
// console.log(manager("restock fat 10")); // Success
// console.log(manager("prepare turkey 1")); // Error: not enough carbohydrate in stock
// console.log(manager("restock flavour 10")); // Success
// console.log(manager("prepare turkey 1")); // Error: not enough carbohydrate in stock
// console.log(manager("report")); // protein=0 carbohydrate=0 fat=0 flavour=0
