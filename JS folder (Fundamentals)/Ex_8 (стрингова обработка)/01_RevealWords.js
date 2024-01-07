// function revealWords(firstPar, secondPar) {

//     let words = firstPar.split(', ');
//     let sentence = secondPar.split(' ');

//     for (let i = 0; i < sentence.length; i++) {

//         let sentenceWord = sentence[i];

//         if (sentenceWord.includes('*')) {

//             for (let j = 0; j < words.length; j++) {

//                 currentWord = words[j];
//                 if (sentenceWord.length === currentWord.length) {
//                     sentence[i] = currentWord;
//                 }
//             }
//         }
//     }
//     console.log(sentence.join(' '));
// }

revealWords('great, learning', 'softuni is ***** place for ******** new programming languages')

revealWords('great', 'softuni is ***** place for learning new programming languages')


function revealWords(firstPar, secondPar) {

    let words = firstPar.split(', ');

    for (let currentWord of words) {

        let stars = '*'.repeat(currentWord.length);
        secondPar =  secondPar.replace(stars, currentWord)
    }
    console.log(secondPar);
}