function magicMatrices(data) {

    let numbToCheck = data[0].reduce((a, b) => a + b);

    for (let i = 0; i < data.length; i++) {

        let sumRow = data[i].reduce((a, b) => a + b);
        let sumCol = 0;

        for (let j = 0; j < data.length; j++) {
            sumCol += data[j][i]
        }

        if (sumCol !== sumRow || numbToCheck !== sumCol || numbToCheck !== sumRow) {
            return false;
        }
    }
    return true;
}

magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]);

console.log('=============');

magicMatrices([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]
)

console.log('=============');

magicMatrices([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]
)

console.log('=============');

magicMatrices([[1, 0, 0],
[0, 0, 1]]
)