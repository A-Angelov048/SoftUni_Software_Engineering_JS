function cats(arr) {

    class Meow {

        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayMeow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let i of arr) {

        let [name, age] = i.split(' ');
        let Cat = new Meow(name, age);
        Cat.sayMeow();
    }
}

cats(['Mellow 2', 'Tom 5']);