function convertToJSON(name, lastName, hairColor) {

    let obj = {};
    obj.name = name;
    obj.lastName = lastName;
    obj.hairColor = hairColor;

    console.log(JSON.stringify(obj));
}

convertToJSON('George', 'Jones', 'Brown');
