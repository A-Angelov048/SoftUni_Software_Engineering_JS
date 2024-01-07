function furniture(data) {

    let regex = />{2}(?<name>[A-Za-z]+)<{2}(?<price>\d+\.\d+|\d+)!(?<quantity>\d+)/g;
    let command = regex.exec(data);

    let moneySpend = 0;
    console.log('Bought furniture:');

    while (command) {

        console.log(command[1]);
        moneySpend += command[2] * command[3];
        command = regex.exec(data)
    }

    console.log(`Total money spend: ${moneySpend.toFixed(2)}`);
}

furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'])


console.log('=============');

furniture(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase'])

console.log('=============');

furniture(['>Invalid<<!4',
    '>Invalid<<!2',
    '>Invalid<<!5',
    'Purchase'])
