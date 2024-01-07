function lowerOrUpper(letter) {

    let result = letter.charCodeAt() < 97 ? 'upper-case' : 'lower-case';
    console.log(result);

}

lowerOrUpper('!');
console.log('---');
lowerOrUpper('f');
console.log('---');