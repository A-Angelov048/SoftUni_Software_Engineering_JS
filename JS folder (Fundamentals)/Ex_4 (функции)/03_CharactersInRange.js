function charactersInRange(charOne, charTwo) {

    let startChar = charOne.charCodeAt();
    let endChar = charTwo.charCodeAt();

    if (startChar > endChar) {
        endChar = charOne.charCodeAt();
        startChar = charTwo.charCodeAt();
    }

    let result = [];

    for (let i = startChar + 1; i < endChar; i++) {

        result.push(String.fromCharCode(i));
    }

    return result.join(' ');
}

console.log(charactersInRange('a', 'd'));
console.log('-----------');
console.log(charactersInRange('#', ':'));
console.log('-----------');
console.log(charactersInRange('C', '#'));
console.log('-----------');
