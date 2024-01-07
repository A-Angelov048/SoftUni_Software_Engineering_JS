function streamofLetters(input) {

    let i = 0;

    let command = input[i];
    i++;

    let word = "";
    let sentence = "";
    let symbolC = 0;
    let symbolO = 0;
    let symbolN = 0;


    while (command !== "End") {

        let symbols = command;
        let regex = /[a-z+A-Z]/;

        if (regex.test(symbols)) {
            switch (symbols) {
                case "c": symbolC++;
                    if (symbolC > 1) {
                        word += symbols;
                    }
                    break;
                case "o": symbolO++;
                    if (symbolO > 1) {
                        word += symbols;
                    }
                    break;
                case "n": symbolN++;
                    if (symbolN > 1) {
                        word += symbols;
                    }
                    break;
                default: word += symbols; break;
            }
        }

        if (symbolC > 0 && symbolO > 0 && symbolN > 0) {
            sentence += word + " ";
            word = "";
            symbolC = 0;
            symbolO = 0;
            symbolN = 0;

        }

        command = input[i];
        i++;

    }
    
    console.log(sentence);

}


streamofLetters(["H", "n", "e", "l", "l", "o", "o", "c", "t", "c", "h", "o", "e", "r", "e", "n", "e","End"]);
// streamofLetters(["%", "!", "c", "^", "B", "`", "o", "%", "o", "o", "M", ")", "{", "n", "/", "A", "D", "End"]);
// streamofLetters(["o", "S", "%", "o", "l", "^", "v", "e", "c", "n", "&", "m", "e", "c", "o", "n", "End"]);


