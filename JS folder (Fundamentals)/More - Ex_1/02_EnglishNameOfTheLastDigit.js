function theLastDigit(input) {

    input = String(input);
    let numbLength = input.length;

    let lastDigit = Number(input[numbLength - 1]);

    switch (lastDigit) {
        case 0: console.log('zero'); break;
        case 1: console.log('one'); break;
        case 2: console.log('two'); break;
        case 3: console.log('three'); break;
        case 4: console.log('four'); break;
        case 5: console.log('five'); break;
        case 6: console.log('six'); break;
        case 7: console.log('seven'); break;
        case 8: console.log('eight'); break;
        case 9: console.log('nine'); break;
    }
}

theLastDigit(512);
theLastDigit(1);
theLastDigit(1643);


// function getLastDigitName(number) {

//     let digitNames = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
//     let lastDigit = number % 10;
//     console.log(digitNames[lastDigit]);;
// }

// getLastDigitName(5);