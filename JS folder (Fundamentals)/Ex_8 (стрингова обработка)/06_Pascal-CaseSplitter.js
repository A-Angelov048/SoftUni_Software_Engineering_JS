function pascalCaseSplitter(data) {

    let split = data.split('');
    let word = '';
    let arrOfWords = [];

    for (let i = 0; i < split.length; i++) {

        if (/[^A-Z]/.test(split[i]) || i === 0) {
            word += split[i];
        } else {
            arrOfWords.push(word);
            word = split[i];
        }
    }
    arrOfWords.push(word);
    console.log(arrOfWords.join(', '));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')
console.log('=============');
pascalCaseSplitter('HoldTheDoor');
console.log('===============');
pascalCaseSplitter('ThisIsSoAnnoyingToDo')