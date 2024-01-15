/**
 * Constructors in JavaScript are functions that are used to create and initialize objects.
 * They are typically used in combination with the new keyword
 * in order to create instances of a particular type or class of objects.
 * Constructors serve as blueprints for creating objects with specific properties and methods.
 */

// Function as a constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

// console.log(person1.sayHello()); // Alice

// Constructor's prototype property and adding a method to the prototype
Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};

// Native constructors: String, Number, Boolean, Array, Object, Function, Date, RegExp, Error
// Array constructor native methods and properties
// Array.isArray(), Array.prototype.length
// Object constructor native methods and properties
// Object.keys(), Object.values(), Object.entries(), Object.prototype.hasOwnProperty()

// ES5

// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
// }

// Car.prototype.drive = function () {
//   console.log(`${this.make} is from ${this.year}`);
// };

// ES6

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

class Car extends Vehicls {
  constructor() {
    super();
  }

  start() {
    console.log(`${this.make} is from ${this.year}`);
  }

  stop() {}
}

class Truck extends Vehicle {
  constructor() {
    super();
  }
}

class Driver {
  constructor(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
  }

  driveCar(car) {
    // if 'car' is of type Car ==> continue
    // else return
  }
}

[{}, {}, {}]; // JS array ==> BE JSON.stringify ==> FE JSON.parse() ==> JS array

const driver_1 = new Driver("Schumacher", 40, 20);
const car_1 = new Car("BMW", "X5", 2020);
const fake_car = {
  name: "Mercedes",
};

driver_1.driveCar(car_1);
