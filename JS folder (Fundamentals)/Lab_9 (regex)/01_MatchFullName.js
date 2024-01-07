function matchFullName(data) {

    let regex = /\b(?<names>[A-Z][a-z]+\s[A-Z][a-z]+)\b/g
    let match = regex.exec(data);

    let validNames = [];

    while (match) {

        validNames.push(match[0])
        match = regex.exec(data)
    }
    console.log(validNames.join(' '));
}


matchFullName('Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan  Ivanov')