function powerfullWorld(input) {

    let i = 0;

    let command = input[i];
    i++;

    let word = '';
    let firstLetter = '';
    let sumOfLetters = 0;
    let highSumOfLetters = Number.MIN_SAFE_INTEGER;
    let powerfulWord = '';

    while (command !== 'End of words') {

        if (command === undefined) {
            break;
        }
        word = command;

        for (let j = 0; j < word.length; j++) {

            if (j === 0) {
                firstLetter = word.charAt(j);
            }

            sumOfLetters += word.charCodeAt(j);
        }

        let regex = /[aeiouy+AEIOUY]/;

        if (regex.test(firstLetter)) {
            sumOfLetters *= word.length;
        } else {
            sumOfLetters = Math.floor(sumOfLetters /= word.length);
        }

        if (sumOfLetters > highSumOfLetters) {
            highSumOfLetters = sumOfLetters;
            powerfulWord = word;
        }

        sumOfLetters = 0;
        command = input[i];
        i++;
    }

    console.log(`The most powerful word is ${powerfulWord} - ${highSumOfLetters}`);

}

powerfullWorld(["The", "Most", "Powerful", "Word", "Is", "Experience", "End of words"]);
powerfullWorld(["But", "Some", "People", "Say", "It's", "LOVE", "End of words"]);

