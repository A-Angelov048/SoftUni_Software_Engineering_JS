function wordsUppercase(data) {

    const regex = /(?<word>[\w]+)/g;
    let match = data.match(regex).map((x) => x.toUpperCase());

    console.log(match.join(', '));
}


wordsUppercase('Hi, how are you?')