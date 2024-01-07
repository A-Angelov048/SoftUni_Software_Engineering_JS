function rotateArray(data, rotate) {

    for (let i = 1; i <= rotate; i++) {
        let curChar = data.pop();
        data.unshift(curChar);
    }

    console.log(data.join(' '));
}


rotateArray(['1',
    '2',
    '3',
    '4'],
    2
)

console.log('============');

rotateArray(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15
)