function letters(input) {

    let letterStart = input[0];
    let letterEnd = input[1];
    let letterIgnore = input[2];

    let lett1 = '';
    let lett2 = '';
    let lett3 = '';
    let combinationWord = '';
    let countCombinations = 0;

    for (let i = letterStart.charCodeAt(); i <= letterEnd.charCodeAt(); i++) {

        let letter = String.fromCharCode(i);

        if (letter === letterIgnore) {
            continue;
        } else {
            lett1 = letter;
        }

        for (let j = letterStart.charCodeAt(); j <= letterEnd.charCodeAt(); j++) {

            let letter = String.fromCharCode(j);

            if (letter === letterIgnore) {
                continue;
            } else {
                lett2 = letter;
            }

            for (let n = letterStart.charCodeAt(); n <= letterEnd.charCodeAt(); n++) {

                let letter = String.fromCharCode(n);

                if (letter === letterIgnore) {
                    continue;
                } else {
                    lett3 = letter;
                }

                countCombinations++;
                combinationWord += `${lett1}${lett2}${lett3}` + ' ';

            }
        }
    }
    
    console.log(`${combinationWord}${countCombinations}`);
    console.log('-----------');
}

letters(['a', 'c', 'b']);

letters(['f', 'k', 'h']);

letters(['a', 'c', 'z']);