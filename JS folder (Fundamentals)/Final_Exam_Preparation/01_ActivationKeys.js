function activationKeys(data) {

    let rawActicationKey = data.shift();

    let i = 0;
    let command = data[i];
    i++;

    while (command !== 'Generate') {

        let [curCommand, action1, action2, action3] = command.split('>>>');

        switch (curCommand) {

            case 'Contains':
                let substring = action1;
                if (rawActicationKey.includes(substring)) {
                    console.log(`${rawActicationKey} contains ${substring}`);
                } else {
                    console.log('Substring not found!');
                }
                break;

            case 'Flip':
                let upperOrLower = action1;
                let startIndex = Number(action2);
                let endIndex = Number(action3);

                if (upperOrLower === 'Upper') {
                    let find = rawActicationKey.substring(startIndex, endIndex);
                    let replace = find.toUpperCase()
                    rawActicationKey = rawActicationKey.replace(find, replace);

                } else if (upperOrLower === 'Lower') {
                    let find = rawActicationKey.substring(startIndex, endIndex);
                    let replace = find.toLowerCase()
                    rawActicationKey = rawActicationKey.replace(find, replace);
                }
                console.log(rawActicationKey);
                break;

            case 'Slice':
                let startIndexSlice = Number(action1);
                let endIndexSlice = Number(action2);

                let firstSlice = rawActicationKey.substring(0, startIndexSlice);
                let secondSlice = rawActicationKey.substring(endIndexSlice);

                rawActicationKey = firstSlice + secondSlice;
                console.log(rawActicationKey);
                break;
        }

        command = data[i];
        i++
    }
    console.log(`Your activation key is: ${rawActicationKey}`);
}


activationKeys(["abcdefghijklmnopqrstuvwxyz",
    "Contains>>>def",
    "Slice>>>1>>>1",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>deF",
    "Generate"]);

console.log('===========');

activationKeys(["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"]);
