function calorieObject(data) {

    let obj = {};

    while (data.length !== 0){

        const evenIndex = data.shift();
        const oddIndex = Number(data.shift());
        obj[evenIndex] = oddIndex;
    }

    return obj
}


calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])