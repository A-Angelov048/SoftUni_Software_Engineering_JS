function cardGame(data) {

    let infoEachPerson = {};
    let infoCards = [];
    let sumCards = 0;

    for (let line of data) {

        let [personName, cards] = line.split(': ')
        infoCards.push({ personName });
        let cardsToArr = cards.split(', ');
        let cardsToArrLength = cardsToArr.length;

        for (let i = 0; i < cardsToArrLength; i++) {

            let powerCard = 0;
            let currentCard = cardsToArr.shift();
            let saveCurrentCard = infoCards.find(n => n.personName === personName);

            if (cardsToArr.includes(currentCard) || saveCurrentCard.hasOwnProperty(currentCard)) {
                continue;
            }

            switch (currentCard[0]) {

                case 'J': powerCard = 11; break
                case 'Q': powerCard = 12; break
                case 'K': powerCard = 13; break
                case 'A': powerCard = 14; break
                default:
                    if (currentCard.length === 3) {
                        powerCard = `${currentCard[0]}${currentCard[1]}`
                    } else {
                        powerCard = currentCard[0];
                    }
                    break;
            }

            if (currentCard[1] === 'S' || currentCard[2] === 'S') {
                sumCards += Number(powerCard) * 4;
            } else if (currentCard[1] === 'H' || currentCard[2] === 'H') {
                sumCards += Number(powerCard) * 3
            } else if (currentCard[1] === 'D' || currentCard[2] === 'D') {
                sumCards += Number(powerCard) * 2
            } else if (currentCard[1] === 'C' || currentCard[2] === 'C') {
                sumCards += Number(powerCard) * 1
            }

            if (saveCurrentCard) { 
                saveCurrentCard[currentCard] = 1;
            }
        }

        if (infoEachPerson.hasOwnProperty(personName)) {
            infoEachPerson[personName] += sumCards;
            sumCards = 0;
        } else {
            infoEachPerson[personName] = sumCards;
            sumCards = 0;
        }
    }
    
    for (let [name, value] of Object.entries(infoEachPerson)) {
        console.log(`${name}: ${value}`);
    }
}


cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
])

console.log('==============');

cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
    ])