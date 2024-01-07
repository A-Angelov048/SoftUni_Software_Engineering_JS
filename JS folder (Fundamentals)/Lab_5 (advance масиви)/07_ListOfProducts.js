function listOfProducts(arr) {

    let sortArr = arr.sort();
    let arrLength = arr.length;

    for (let i = 0; i < arrLength; i++) {

        console.log(`${i + 1}.${sortArr[i]}`);
    }
}


listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);


function listOfProducts(array) {
    let sortedList = array
        .sort()
        .map((product, i) => `${i + 1}.${product}`)
        .join('\n')
    console.log(sortedList);
}