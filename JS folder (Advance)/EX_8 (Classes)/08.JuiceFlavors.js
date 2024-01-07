function juiceFlavors(arrJuice) {

    const storedQuantity = getQuantityOfJuice();

    function getQuantityOfJuice() {
        const mapJuice = new Map();
        const mapBottles = new Map();
        for (let line of arrJuice) {

            let [juice, quantity] = line.split(' => ');
            quantity = Number(quantity);

            if (!mapJuice.has(juice)) {
                mapJuice.set(juice, 0)
            }
            let newQuantity = mapJuice.get(juice) + quantity;
            mapJuice.set(juice, newQuantity);

            if (mapJuice.get(juice) >= 1000) {
                while (mapJuice.get(juice) >= 1000) {

                    let newQuantity = mapJuice.get(juice) - 1000;
                    mapJuice.set(juice, newQuantity);

                    if (!mapBottles.has(juice)) {
                        mapBottles.set(juice, 0)
                    }
                    let bottles = mapBottles.get(juice) + 1;
                    mapBottles.set(juice, bottles);
                }
            }
        }
        return mapBottles;
    }

    print(storedQuantity)

    function print(storedBottles) {

        for (let [juice, bottles] of storedBottles) {
            console.log(`${juice} => ${bottles}`);
        }
    }
}

juiceFlavors(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
)

console.log('=====================================');

juiceFlavors(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
)