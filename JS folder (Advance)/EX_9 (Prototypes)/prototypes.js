// First function constructor
function Animal(name) {
    this.name = name;
  }
  
  // Adding a method to the Animal prototype
  Animal.prototype.eat = function (food) {
    console.log(`${this.name} is eating ${food}.`);
  };
  
  // Second function constructor inheriting from Animal
  function Dog(name, breed) {
    // Call the Animal constructor to set the 'name' property
    Animal.call(this, name);
    this.breed = breed;
  }
  
  // Linking the Dog prototype to the Animal prototype
  Dog.prototype = Object.create(Animal.prototype);
  
  // Adding a method to the Dog prototype
  Dog.prototype.bark = function () {
    console.log(`${this.name} is barking.`);
  };
  
  // Animal -> Dog -> Bulldog - Multilevel inheritance
  // Third constructor function inheriting from Dog
  function Bulldog(name) {
    // Call the Dog constructor to set the 'name' and 'breed' properties
    Dog.call(this, name, "Bulldog");
  }
  
  // Linking the Bulldog prototype to the Dog prototype
  Bulldog.prototype = Object.create(Dog.prototype);
  
  // Adding a method to the Bulldog prototype
  Bulldog.prototype.run = function () {
    console.log(`${this.name} is running.`);
  };
  
  // Creating instances
  const animal = new Animal("Generic Animal");
  const dog = new Dog("Rex", "German Shepherd");
  const bulldog = new Bulldog("Spike");
  
  // Demonstrating the prototype chain
  animal.eat("grass"); // Output: Generic Animal is eating grass.
  dog.eat("bone"); // Output: Rex is eating bone.
  dog.bark(); // Output: Rex is barking.
  bulldog.eat("treat"); // Output: Spike is eating treat.
  bulldog.bark(); // Output: Spike is barking.
  bulldog.run(); // Output: Spike is running.
  
  // // 1. We define three constructor functions: Animal, Dog, and Bulldog.
  // // 2. We establish a prototype chain where the Dog.prototype inherits from the Animal.prototype, and the Bulldog.prototype inherits from the Dog.prototype. This creates a chain of prototype inheritance.
  // // 3. Each constructor adds its own methods and properties to its respective prototypes.
  // // 4. Instances of these constructors can access methods from their prototype and the prototype chain, allowing them to inherit and share behavior.