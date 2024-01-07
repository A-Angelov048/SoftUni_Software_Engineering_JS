function place(string1, char, string2){

    let replace = string1.replace('_', char);

    let result = replace === string2 ? 'Matched' : 'Not Matched';

    console.log(result);

}

place('Str_ng', 'I', 'Strong');
place('Str_ng', 'i', 'String');