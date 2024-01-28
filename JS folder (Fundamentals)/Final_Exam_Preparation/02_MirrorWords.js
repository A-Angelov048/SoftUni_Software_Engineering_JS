function mirrorWords(data) {

    let regex = /([@]|[#])(?<pair1>[A-Za-z]{3,})\1\1(?<pair2>[A-Za-z]{3,})\1/g;

    let countPairs = 0;
    let mirrorWords = [];
    let match = regex.exec(data);

    while (match) {

        countPairs++;
        let reversWord = match.groups.pair2.split('').reverse().join('');

        if (match.groups.pair1 === reversWord) {

            mirrorWords.push(match.groups.pair1, match.groups.pair2)
        }

        match = regex.exec(data);
    }

    if (countPairs > 0) {
        console.log(`${countPairs} word pairs found!`);
    } else {
        console.log(`No word pairs found!`);
    }

    if (mirrorWords.length > 0) {
        let toPrint = ''
        for (let i = 0; i < mirrorWords.length; i += 2) {

            if (i === mirrorWords.length - 2) {
                toPrint += `${mirrorWords[i]} <=> ${mirrorWords[i + 1]}`;
            } else {
                toPrint += `${mirrorWords[i]} <=> ${mirrorWords[i + 1]}, `;
            }
        }
        console.log('The mirror words are:');
        console.log(toPrint);
    } else {
        console.log('No mirror words!');
    }
}

mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);

console.log('===========');

mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);

console.log('===========');

mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);