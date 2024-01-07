function replaceRepeatingChars(data) {

    let arrData = data.split('');
    let letters = '';

    for (let i = 0; i < arrData.length; i++) {

        if (arrData[i] !== arrData[i + 1]) {
            letters += arrData[i];
        }
    }
    console.log(letters);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')
console.log('============');
replaceRepeatingChars('qqqwerqwecccwd')