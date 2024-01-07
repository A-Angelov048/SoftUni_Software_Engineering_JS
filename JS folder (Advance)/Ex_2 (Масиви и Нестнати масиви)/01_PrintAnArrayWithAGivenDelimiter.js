function printAnArray(data, separator) {

    console.log(data.join(separator));
}

printAnArray(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-'
)
console.log('==========');
printAnArray(['How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!'],
    '_'
)