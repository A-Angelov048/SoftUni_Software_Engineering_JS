function convertToObject(input){

    let toObj = JSON.parse(input);

    for (let [key, value] of Object.entries(toObj)){

        console.log(`${key}: ${value}`);
    }
}


convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
console.log('==============');
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');
console.log('==============');