function passwordValidator(password) {

    let passwordLength = password.length;
    let isValid = true;
    let result = '';

    if (passwordLength < 6 || passwordLength > 10) {
        result += 'Password must be between 6 and 10 characters' + '\n';
        isValid = false;
    }
    if (/[\W]/.test(password)) {
        result += 'Password must consist only of letters and digits' + '\n';
        isValid = false;
    }
    if (/[0-9]{2,10}/.test(password)) {

    } else {
        result += 'Password must have at least 2 digits';
        isValid = false;
    }

    if (isValid) {
        return 'Password is valid';
    }

    return result;
}

console.log(passwordValidator('1111'));;
console.log('----------');
console.log(passwordValidator('MyPass123'));;
console.log('----------');
console.log(passwordValidator('Pa$s$s'));;
console.log('----------');