function wordTracker(data) {

    let objOfWords = {};
    let searchedWords = data.shift().split(' ');

    for (let i of searchedWords) {

        objOfWords[i] = 0;
    }

    for (let j of data) {

        if (objOfWords.hasOwnProperty(j)) {
            objOfWords[j] += 1;
        }
    }

    let sort = Object.entries(objOfWords).sort((a, b) => b[1] - a[1]);
    for (let [key, value] of sort) {

        console.log(`${key} - ${value}`);
    }
}


wordTracker([
    'this sentence',
    'In',
    'this',
    'sentence',
    'you',
    'have',
    'to',
    'count',
    'the',
    'occurrences',
    'of',
    'the',
    'words',
    'this',
    'and',
    'sentence',
    'because',
    'this',
    'is',
    'your',
    'task'
]);