function messageTranslator(data) {

    let regex = /!(?<command>[A-Z]{1}[a-z]{2,})!:\[(?<string>[A-Za-z\s]{8,})\]/;
    let countOfInputs = Number(data.shift());

    for (let i = 0; i < countOfInputs; i++) {

        let validCommand = data[i].match(regex);

        if (validCommand) {
            let sumLetters = '';
            let string = validCommand.groups.string.split('');

            for (let el of string) {

                sumLetters += ' ' + el.charCodeAt();
            }
            console.log(`${validCommand.groups.command}:${sumLetters}`);
        } else {
            console.log('The message is invalid');
        }
    }
}

messageTranslator(["3",

"go:[outside]",

"!drive!:YourCarToACarWash",

"!Watch!:[LordofTheRings]"])
