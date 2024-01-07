function decryptingCommands(data) {

    let strToDecrypt = data.shift();
    let i = 0;
    let command = data[i];
    i++;

    while (command !== 'Finish') {

        let [decryptCommand, comm1, comm2] = command.split(' ');

        switch (decryptCommand) {

            case 'Replace':
                let currentChar = comm1;
                let newChar = comm2;
                while (strToDecrypt.includes(currentChar)) {

                    strToDecrypt = strToDecrypt.replace(currentChar, newChar);
                }
                console.log(strToDecrypt);
                break;

            case 'Cut':
                let startIndex = Number(comm1);
                let endIndex = Number(comm2);
                if (startIndex < strToDecrypt.length && endIndex < strToDecrypt.length && startIndex >= 0 && endIndex >= 0) {
                    let firstCut = strToDecrypt.substring(0, startIndex + 1);
                    let secondCut = strToDecrypt.substring(endIndex + startIndex + 1);
                    strToDecrypt = firstCut.concat(secondCut);
                    console.log(strToDecrypt);
                } else {
                    console.log('Invalid indices!');
                }
                break;

            case 'Make':
                let upperOrLowerLetters = comm1;
                if (upperOrLowerLetters === 'Upper') {
                    strToDecrypt = strToDecrypt.toUpperCase();
                } else if (upperOrLowerLetters === 'Lower') {
                    strToDecrypt = strToDecrypt.toLowerCase();
                }
                console.log(strToDecrypt);
                break;

            case 'Check':
                let str = comm1;
                if (strToDecrypt.includes(str)) {
                    console.log(`Message contains ${str}`);
                } else {
                    console.log(`Message doesn't contain ${str}`);
                }
                break;

            case 'Sum':
                let sIndex = Number(comm1);
                let eIndex = Number(comm2);
                if (sIndex < strToDecrypt.length && eIndex < strToDecrypt.length && sIndex >= 0 && eIndex >= 0) {
                    let cutText = strToDecrypt.substring(sIndex, eIndex + 1).split('');
                    let sum = 0;
                    for (let el of cutText) {

                        sum += el.charCodeAt();
                    }
                    console.log(sum);
                } else {
                    console.log('Invalid indices!');
                }
        }
        command = data[i];
        i++;
    }
}

decryptingCommands(["ILikeSoftUni", "Replace I We", "Make Upper", "Check SoftUni", "Sum 1 4", "Cut 0 4", "Finish"])

console.log('================');

decryptingCommands(["HappyNameDay", "Replace p r", "Make Lower", "Cut 2 23", "Sum -2 2", "Finish"])
