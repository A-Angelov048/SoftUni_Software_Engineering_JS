function personInfo(firstName, lastName, age) {

    let obj = {

        firstName: firstName,
        lastName: lastName,
        age: age
    }

    return obj;
}
   

console.log(personInfo("Peter", "Pan", "20"));

console.log('=================');

console.log(personInfo("George", "Smith", "18"));

console.log('=================');


function personInfo(firstName, lastName, age) {

    let obj = {

        firstName,
        lastName,
        age
    }

    return obj;
}



function personInfo(firstName, lastName, age) {

    let obj = {};

    obj.firstName = firstName;
    obj.lastName = lastName;
    obj.age = age;

    return obj;
}


