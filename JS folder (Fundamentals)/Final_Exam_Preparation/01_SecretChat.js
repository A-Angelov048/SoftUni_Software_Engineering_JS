function secretChat(data) {

    let hiddenMessage = data.shift();

    let i = 0;
    let command = data[i];
    i++;

    while (command !== 'Reveal') {

        let [curCommand, instruction1, instruction2] = command.split(':|:');

        switch (curCommand) {

            case 'InsertSpace':
                let index = Number(instruction1);
                let firstHalf = hiddenMessage.substring(0, index);
                let secondHalf = hiddenMessage.substring(index);
                hiddenMessage = firstHalf + ' ' + secondHalf;
                console.log(hiddenMessage);
                break;

            case 'Reverse':
                let substring = instruction1;
                if (hiddenMessage.includes(substring)) {
                    let firstIndex = hiddenMessage.indexOf(substring);
                    let secondIndex = firstIndex + substring.length;
                    let cut = hiddenMessage.substring(firstIndex, secondIndex).split('').reverse().join('');
                    let firstHalf = hiddenMessage.substring(0, firstIndex);
                    let secondHalf = hiddenMessage.substring(secondIndex);
                    hiddenMessage = firstHalf + secondHalf + cut;
                    console.log(hiddenMessage);
                } else {
                    console.log('error');
                }
                break;

            case 'ChangeAll':
                let textToRep = instruction1;
                let replacement = instruction2;
                while (hiddenMessage.includes(textToRep)) {
                    hiddenMessage = hiddenMessage.replace(textToRep, replacement);
                }
                console.log(hiddenMessage);
                break;
        }
        command = data[i];
        i++;
    }
    console.log(`You have a new text message: ${hiddenMessage}`);

}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);

console.log('====================');

secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]);
