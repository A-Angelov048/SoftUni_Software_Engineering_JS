function company(arrCars) {

    const carBrandMap = new Map();

    for (let line of arrCars) {

        let [brand, model, quantity] = line.split(' | ');
        quantity = Number(quantity)

        if (!carBrandMap.has(brand)) {
            carBrandMap.set(brand, new Map())
        }
        debugger
        if (!carBrandMap.get(brand).has(model)) {
            carBrandMap.get(brand).set(model, 0)
        }
        let newQuantity = carBrandMap.get(brand).get(model) + quantity;
        carBrandMap.get(brand).set(model, newQuantity)
    }

    for (let [brand, models] of carBrandMap) {
        console.log(brand);
        for (let [model, quantity] of models) {
            console.log(`###${model} -> ${quantity}`);
        }
    }
}


company(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'Audi | Q6 | 10000',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);