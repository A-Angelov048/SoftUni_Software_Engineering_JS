function extract(data) {

    let bigestNumber = Number.MIN_SAFE_INTEGER;
    // let newArr = [];

    return data.filter((x) => { // Ако е по другия метод с новият там може също така да използваме и data.map(...);

        if (x >= bigestNumber) {
            // newArr.push(x);
            bigestNumber = x;
            return true // тука не трябва да връщаме 'x' защото ако имаме '0' в масива няма да я добави към новият масив. Защото 0 - лата сама по себе си е false стойност, която ще каже на returna false!!!;
        }
    })

    // return newArr
}


console.log(extract([0, 1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log('===============');
console.log(extract([1, 2, 3, 4,]));
console.log('===============');
console.log(extract([20, 3, 2, 15]));



function otherWayToExtract(data) {

    let bigestNumber = Number.MIN_SAFE_INTEGER;

    return data.reduce((acc, el) => {

        if (el >= bigestNumber) {
            bigestNumber = el;
            acc.push(el);
        }
        return acc

    }, [])
}

console.log(otherWayToExtract([0, 1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log('===============');
console.log(otherWayToExtract([1, 2, 3, 4,]));
console.log('===============');
console.log(otherWayToExtract([20, 3, 2, 15]));