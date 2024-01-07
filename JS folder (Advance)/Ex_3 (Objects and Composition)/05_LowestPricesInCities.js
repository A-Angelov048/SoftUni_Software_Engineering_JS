function lowestPricesInCities(data) { // решение с масив от обекти 
 
    let objTown = []

    for (let line of data) {

        let [townName, productName, productPrice] = line.split(' | ');
        productPrice = Number(productPrice);
        let find = objTown.find((a) => a.product === productName);

        if (!find) {
            objTown.push({ town: townName, product: productName, price: productPrice });
        } else {
            if (find.price > productPrice) {
                find.price = productPrice;
                find.town = townName;
            }
        }
    }

    for (let line of objTown) {
        console.log(`${line.product} -> ${line.price} (${line.town})`);
    }
}

lowestPricesInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
)

console.log('=============================================');

lowestPricesInCities(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000'])


function lowestPriceCities(data) { // решение с MAP

    let res = new Map;

    for (const line of data) {
        let [town, product, price] = line.split(" | ");
        price = Number(price);

        if (!res.has(product) || res.get(product).price > price) {
            res.set(product, { town, price });
        }

    }
    for (const [product, { town, price }] of res.entries()) {
        console.log(`${product} -> ${price} (${town})`);
    }
}
lowestPriceCities(['Sample Town | Sample Product | 1000',

    'Sample Town | Orange | 2',

    'Sample Town | Peach | 1',

    'Sofia | Orange | 3',

    'Sofia | Peach | 2',

    'New York | Sample Product | 1000.1',

    'New York | Burger | 10'])


function toshkoStyle(data) { // решение обект в обекта

    let res = {};

    for (let line of data) {

        let [town, product, price] = line.split(' | ');

        if (!res.hasOwnProperty(product)) {
            res[product] = {};
        }

        if (res[product]['price'] === undefined || res[product]['price'] > price){
            res[product]['town'] = town;
            res[product]['price'] = price;
        }
    }

    for (let [product,productData] of Object.entries(res)){
        console.log(`${product} -> ${productData.price} (${productData.town})`);
    }
}

toshkoStyle(['Sample Town | Sample Product | 1000',

    'Sample Town | Orange | 2',

    'Sample Town | Peach | 1',

    'Sofia | Orange | 3',

    'Sofia | Peach | 2',

    'New York | Sample Product | 1000.1',

    'New York | Burger | 10'])