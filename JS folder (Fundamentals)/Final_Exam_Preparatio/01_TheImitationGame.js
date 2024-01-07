function theImitationGame(arr) {

    let encryptedMessage = arr.shift();

    let i = 0;
    let command = arr[i];
    i++;

    while (command !== 'Decode') {

        command = command.split('|');
        let currentCommand = command.shift();

        switch (currentCommand) {

            case 'Move':
                for (let i = 0; i < command; i++) {
                    let letter = encryptedMessage.substring(0, 1);
                    encryptedMessage = encryptedMessage.substring(1);
                    encryptedMessage = encryptedMessage.padEnd(encryptedMessage.length + 1, letter);
                }
                break;

            case 'Insert':
                let [index, value] = command;
                let cut = encryptedMessage.substring(0, index);
                encryptedMessage = encryptedMessage.substring(index)
                encryptedMessage = encryptedMessage.padStart(encryptedMessage.length + value.length, value);
                encryptedMessage = encryptedMessage.padStart(encryptedMessage.length + cut.length, cut);
                break;

            case 'ChangeAll':
                let [cutLetter, replaceLetter] = command;

                while (encryptedMessage.includes(cutLetter)) {

                    encryptedMessage = encryptedMessage.replace(cutLetter, replaceLetter);
                }
                break;
        }

        command = arr[i];
        i++;
    }

    console.log(`The decrypted message is: ${encryptedMessage}`);
}


theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
])

console.log('==============');

theImitationGame ([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
    ])