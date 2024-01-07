function wordOccurrences(data) {

    let wordOccurs = {};

    for (let line of data) {

        let word = line;

        if (wordOccurs.hasOwnProperty(word)) {
            wordOccurs[word] += 1;
        } else {
            wordOccurs[word] = 1;
        }
    }

    let sort = Object.entries(wordOccurs).sort((a, b) => b[1] - a[1]);

    for (let [word, count] of sort){
        console.log(`${word} -> ${count} times`);
    }
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])

console.log('==========');

wordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);