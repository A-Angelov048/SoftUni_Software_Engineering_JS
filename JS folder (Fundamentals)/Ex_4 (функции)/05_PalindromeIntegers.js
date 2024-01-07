function palindromeIntegers(arr) {

    let result = '';
    let arrlength = arr.length;

    for (let i = 0; i < arrlength; i++) {

        let currentNumb = arr[i].toString();
        let reverseNumb = currentNumb.split('').reverse().join('');

        if (currentNumb === reverseNumb) {
            result += 'true' + '\n';
        } else {
            result += 'false' + '\n';;
        }
    }
    return result;
}

console.log(palindromeIntegers([123, 323, 421, 121]));