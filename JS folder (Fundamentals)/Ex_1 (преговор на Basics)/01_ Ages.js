function ages(input) {

    let age = input;
    let person = '';

    if (age >= 0 && age <= 2) {
        person = 'baby';
    } else if (age > 2 && age <= 13) {
        person = 'child';
    } else if (age > 13 && age <= 19) {
        person = 'teenager';
    } else if (age > 19 && age <= 65){
        person = 'adult';
    } else if (age > 65){
        person = 'elder';
    } else {
        person = 'out of bounds';
    }
console.log(person);
}

ages(14);