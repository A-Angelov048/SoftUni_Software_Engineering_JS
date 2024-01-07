class Test {

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName1() {
        return `Name: ${this.firstName} ${this.lastName}`;
    }
    set fullName1(x) {
        let split = x.split(' ');
        this.firstName = split[0];
        this.lastName = split[1];
    }

}

let newTest = new Test();
console.log(newTest);
newTest.fullName1 = 'Alex Angelov';
console.log(newTest.fullName1);
console.log(newTest.firstName);
console.log(newTest.lastName);