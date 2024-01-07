function employees(arr) {

    class List {

        constructor(name, personalNumb) {

            this.name = name;
            this.personalNumb = personalNumb;
        }

        result() {
            console.log(`Name: ${this.name} -- Personal Number: ${this.personalNumb}`);
        }
    }

    for (let i of arr) {

        let currentEmployee = new List(i, i.length);
        currentEmployee.result(currentEmployee);
    }
}

employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);
console.log('==============');
employees(['Samuel Jackson', 'Will Smith', 'Bruce Willis', 'Tom Holland']);