function phoneBook(data) {

    let infoPerson = new Map();

    for (let line of data) {

        let [name, phone] = line.split(' ');

        if (infoPerson.has(name)) {
            infoPerson.set(name, phone)
        } else {
            infoPerson.set(name, phone);
        }
    }

    let iterator = infoPerson[Symbol.iterator]();
    for(let [name, phone] of iterator){
        console.log(`${name} -> ${phone}`);
    }
}


phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'])

console.log('================');

phoneBook(['George 0552554',
'Peter 087587',
'George 0453112',
'Bill 0845344'])