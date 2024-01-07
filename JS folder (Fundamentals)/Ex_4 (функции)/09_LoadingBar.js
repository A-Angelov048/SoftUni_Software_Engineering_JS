function loadingBar(input) {

    let percentSign = input / 10;
    let dots = (100 - input) / 10;

    if (input === 100) {
        return '100% Complete!';
    } else {
        return `${input}% [${'%'.repeat(percentSign)}${'.'.repeat(dots)}]` + '\n' + 'Still loading...';
    }
}

console.log(loadingBar(50));
