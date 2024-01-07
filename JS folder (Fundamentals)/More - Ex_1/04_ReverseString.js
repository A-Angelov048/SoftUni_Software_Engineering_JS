function reverseString(input) {

    input = String(input)
    let inputLenght = input.length;
    let result = '';

    for (let i = inputLenght - 1; i >= 0; i--) {
        result += input.charAt(i);
    }
    console.log(result);
}

reverseString('Hello')
reverseString('SoftUni')
reverseString('1234')
