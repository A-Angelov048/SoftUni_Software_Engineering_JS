function modernTimes(data) {

    let arrData = data.split(' ');

    for (let word of arrData) {


        if (word.includes('#') && word.length > 1) {

            let regex = /[^a-z+A-Z]/;
            let index = word.includes('#');
            let newWord = word.substring(index)

            if (regex.test(newWord)) { // /[^a-z+A-Z]/.test(newWord)
                continue;
            } else {
                console.log(newWord);
            }
        }
    }
}


modernTimes('Nowadays everyone uses # to tag a #spec1^^^2````i#al word in #socialMedia')

console.log('==========');

modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign')