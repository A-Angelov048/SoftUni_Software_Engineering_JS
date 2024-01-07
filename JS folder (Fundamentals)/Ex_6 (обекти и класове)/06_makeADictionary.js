function makeADictionary(jsonArr) {

    let obj = {};
    for (const json of jsonArr) {
        let term = JSON.parse(json);
        for (const key of Object.keys(term)) {
            obj[key] = term[key];
        }
    }
    const sortedTerms = Object.keys(obj).sort();
    for (const term of sortedTerms) {
        console.log(`Term: ${term} => Definition: ${obj[term]}`);
    }

}


makeADictionary(['{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Boiler":"NVM"}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'])