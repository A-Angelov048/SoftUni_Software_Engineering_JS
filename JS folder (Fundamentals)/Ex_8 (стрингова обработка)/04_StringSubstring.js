function stringSubstring(word, text) {

    let caseInsensitiveText = text.toLowerCase().split(' ');

    for (let line of caseInsensitiveText) {

        if (line === word) {
            return word;
        }
    }
    return `${word} not found!`
}

console.log(stringSubstring('javascript', 'JavaScript is the best programming language'));
console.log('===========');
console.log(stringSubstring('python', 'JavaScript is the best programming language'));