class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start() {
    console.log(`${this.make} and ${this.model} is from ${this.year}`);
  }
  stop() {}
}

export default Vehicle;
