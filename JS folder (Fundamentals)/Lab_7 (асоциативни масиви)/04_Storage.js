function storage(data) {

    let itemInfo = new Map();

    for (let line of data) {

        let [item, quantity] = line.split(' ');

        if (itemInfo.has(item)) {
            let curQuantity = itemInfo.get(item)
            let newQuantity = curQuantity += Number(quantity);
            itemInfo.set(item, newQuantity);

        } else {
            itemInfo.set(item, Number(quantity))
        }
    }

    for (let [item, quantity] of itemInfo) {
        console.log(`${item} -> ${quantity}`);
    }
}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])

console.log('=================');

storage(['apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40']);