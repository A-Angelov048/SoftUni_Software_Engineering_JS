function addressBook(data) {

    let infoPerson = {}

    for (let line of data) {

        let [name, address] = line.split(':');
        infoPerson[name] = address;

    }

    let sort = Object.entries(infoPerson).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, address] of sort){

        console.log(`${name} -> ${address}`);
    }
}


addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])