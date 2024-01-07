function countStringOccurrences(text, word) {

    let count = 0;
    let split = text.split(' ');

    for (let line of split){

        if (line === word){
            count++;
        }
    }
    console.log(count);
}

countStringOccurrences('This is a word and it also is a sentence', 'is')