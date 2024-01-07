function printEveryN(data, N) {

    let newArr = [];

    for (let i = 0; i < data.length; i += N){
        newArr.push(data[i]);
    }

    return newArr
}

printEveryN(['5',
    '20',
    '31',
    '4',
    '20'],
    2
)