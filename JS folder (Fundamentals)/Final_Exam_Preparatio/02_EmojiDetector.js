function emojiDetector(data) {

    let regexEmoji = /([:]{2}|[**]{2})(?<emoji>[A-Z][a-z]{2,})\1/g;
    let match = regexEmoji.exec(data);

    let regexCoolThreshold = /(\d)/g
    let coolThreshold = data[0].match(regexCoolThreshold);
    coolThreshold = coolThreshold.reduce((a, b) => a * b);

    let emojiInfo = [];
    let emojiCounter = 0

    while (match) {

        let sum = 0;
        emojiCounter += 1;
        let curEmoji = match.groups.emoji;
        let curEmojiLength = curEmoji.length;

        for (let i = 0; i < curEmojiLength; i++) {
            sum += curEmoji.charCodeAt(i);
        }

        if (sum >= coolThreshold) {
            emojiInfo.push(match[0]);
        }

        match = regexEmoji.exec(data)
    }

    console.log(`Cool threshold: ${coolThreshold}`);
    console.log(`${emojiCounter} emojis found in the text. The cool ones are:`);
    for (let line of emojiInfo) {
        console.log(line);
    }
}


emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);

console.log('============');

emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);

console.log('============');

emojiDetector (["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);