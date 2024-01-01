## Constructor Exercises with Car and Driver:

## Try to define what is a class, an abstraction, an instance, a property of an instance and a method.

1. **Create a `Car` Constructor (Abstraction):**

   - Create a constructor function called `Car` that takes parameters for `make`, `model`, and `year`, or be extra creative and add even more properties to the Car abstractaion.
   - Inside the constructor, assign these parameters to the respective properties of the object.
   - Use ES5 syntax (function Car() {})
   - Extra points for converting the ES5 syntax to ES6 (needs self investigating for this purpouse)

2. **Create Instances of `Car`:**

   - Create three instances of the `Car` constructor with different values for `make`, `model`, and `year`.

3. **Add a Method to `Car`:**

   - Add a method called `start` to the `Car` prototype that logs a message indicating that the car has started.
   - Add a method called `stop` to the `Car` prototype that logs a message indicating that the car has stopped.

4. **Create a `Driver` Constructor:**

   - Create a constructor function called `Driver` that takes parameters for `name`, `age`, and `experience` (in years).
   - Inside the constructor, assign these parameters to the respective properties of the object.

5. **Create Instances of `Driver`:**

   - Create three instances of the `Driver` constructor with different values for `name`, `age`, and `experience`.

6. **Add a Method to `Driver`:**

   - Add a method called `driveCar` to the `Driver` prototype that takes a `Car` object as a parameter and logs a message indicating that the driver is driving the specified car.

7. **Car and Driver Interaction:**
   - Create a new instance of `Car` and an instance of `Driver`.
   - Use the `driveCar` method to make the driver drive the car.

## BONUS TASK

1. Investigate how to obtain inheritance with the ES5 syntax (hint: use call method).

2. **Investigate what is an inheritance in the scope of OOP**
   - Create a `Vehicle` constructor
   - Think how a `Car` abstraction can inherit from the `Vehicle` abstraction
   - Move some of the properties and methods of the `Car` constructor as part of the `Vehicle` constructor and use proper syntax for those properties and methods to be available also on the `Car` instances by means of inheritance.
   - Create `Truck` constructor. Make it also inherit from `Vehicle` constructor.
