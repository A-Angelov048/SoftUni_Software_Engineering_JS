function storeCatalogue(data) {

    let sortData = data.sort((a, b) => a.localeCompare(b));
    let objCatalogue = {};

    for (let line of sortData) {

        let [productName, productPrice] = line.split(' : ');
        productPrice = Number(productPrice);

        if (!objCatalogue.hasOwnProperty(productName[0])) {
            objCatalogue[productName[0]] = {};
        }

        if (objCatalogue.hasOwnProperty(productName[0])) {
            objCatalogue[productName[0]][productName] = productPrice
        }
    }

    for (let [letter, products] of Object.entries(objCatalogue)) {
        console.log(letter);
        for (let line in products) {
            console.log(` ${line}: ${products[line]}`);
        }
    }
}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);

console.log('================================');

storeCatalogue(['Banana : 2',
    'Rubic`s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']
)