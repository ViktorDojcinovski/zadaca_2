import Vehicle from "./Vehicle";

class Car extends Vehicle {
  constructor(make, model, year, country, fuel) {
    // Vehicle.constructor(make, model, year);
    super(make, model, year);
    this.country = country;
    this.fuel = fuel;
  }
}

export default Car;
