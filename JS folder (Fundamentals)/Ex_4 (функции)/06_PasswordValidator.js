function passwordValidator(password) {

    let passwordLength = password.length;
    let result = '';
    let isValid = true;
    let isValidNumb = false;
    let isValidLetter = true;
    let countDigit = 0;

    if (passwordLength < 6 || passwordLength > 10) {
        result += 'Password must be between 6 and 10 characters' + '\n';
        isValid = false;
    }

    for (let i = 0; i < passwordLength; i++) {

        let currentDigit = password[i];

        if (/[a-z+A-Z+0-9]/.test(currentDigit)) {

            if (/[0-9]/.test(currentDigit)) {
                isValid = true;
                isValidNumb = false;
                countDigit++;
                continue;
            } else {
                isValid = false;
                isValidNumb = true;
            }

        } else if (isValidLetter) {
            result += 'Password must consist only of letters and digits' + '\n';
            isValid = false;
            isValidLetter = false;
        }
    }

    if (isValid && countDigit >= 2) {
        return 'Password is valid';
    }
    if (isValidNumb || countDigit < 2) {
        result += 'Password must have at least 2 digits';
    }

    return result;
}

console.log(passwordValidator('logIn'));;
console.log('----------');
console.log(passwordValidator('MyPass1'));
console.log('----------');
console.log(passwordValidator('Pa$s$s'));
console.log('----------');


