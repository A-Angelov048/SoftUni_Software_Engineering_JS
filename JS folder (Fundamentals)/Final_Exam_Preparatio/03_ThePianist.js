function thePianist(data) {

    let numbOfPieces = Number(data.shift());
    let infoPieces = [];

    for (let i = 0; i < numbOfPieces; i++) {

        let [piece, composer, key] = data.shift().split('|');
        infoPieces.push({ piece, composer, key });
    }

    let j = 0;
    let command = data[j];
    j++;

    while (command !== 'Stop') {

        let [curCommand, piece, composerOrKey, key] = command.split('|');
        let findPiece = infoPieces.find(n => n.piece === piece);

        switch (curCommand) {

            case 'Add':
                if (findPiece) {
                    console.log(`${piece} is already in the collection!`);
                } else {
                    infoPieces.push({ piece, composer: composerOrKey, key });
                    console.log(`${piece} by ${composerOrKey} in ${key} added to the collection!`);
                }
                break;

            case 'Remove':
                if (findPiece) {
                    let index = infoPieces.indexOf(findPiece);
                    infoPieces.splice(index, 1);
                    console.log(`Successfully removed ${piece}!`);
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }
                break;

            case 'ChangeKey':
                if (findPiece) {
                    findPiece.key = composerOrKey;
                    console.log(`Changed the key of ${piece} to ${composerOrKey}!`);
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }
                break;
        }
        command = data[j];
        j++;
    }

    for (let line of infoPieces) {
        console.log(`${line.piece} -> Composer: ${line.composer}, Key: ${line.key}`);
    }
}


thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]);


console.log('======================');

thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]);