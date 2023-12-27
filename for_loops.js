/* 
model: Person
schema: [{ name: string, surname: string, age: number }] --> contract


loop: 

document.query

*/

const persons = [
  {
    name: "Kosta",
    surname: "Kostadinov",
    age: 28,
  },
  {
    name: "Marko",
    surname: "Markovski",
    age: 25,
  },
  {
    name: "Viktor",
    surname: "Dojchinovski",
    age: 30,
  },
  {
    name: "Kristijan",
    surname: "Spasovski",
    age: 28,
  },
];

// for (let i = persons.length - 1; i >= 0; i--) {
//   const person = persons[i];
//   console.log(person.name);

//   if (person) {}
// }

/**
 * 
 * {
    name: "Kosta", // 0
    surname: "Kostadinov", // 1
    age: 28, // 2
  }

  ["Kosta", "Kostadinov", 28];

  for(let key in person) {
    personArray.push(person.[key]);
  }

  Object.keys(person).forEach((key) => {

  });

  {
    name: "Kosta", // 0
    surname: "Kostadinov", // 1
    age: 28, // 2
  }

   */
const schema = ["name", "surname", "age"];
const person = ["Kosta", "Kostadinov", 28];
const objPerson = {};

for (let element of person) {
  const i = person.indexOf(element);
  const key = schema[i];
  objPerson[key] = element;
}

console.log(objPerson);

const machine = { processor: "AMD", memory: "", keyboard: "" };

// for-in loop (ES6)
for (let key in machine) {
  // machine.processor || machine['processor']
  console.log(machine[key]);
}

// for-of loop (ES6)
for (let person of persons) {
  console.log(person);

  if (person) {
  }
}

// // Example using a for loop to iterate over an array
// const numbers = [1, 2, 3, 4, 5];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// // Example using a for-in loop to iterate over an object's properties
// const person = {
//   name: "John",
//   age: 30,
//   job: "Developer",
// };

// for (let key in person) {
//   console.log(`${key}: ${person[key]}`);
// }

// // Example using a for-of loop to iterate over the elements of an array
// const colors = ["red", "green", "blue"];

// for (let color of colors) {
//   console.log(color);
// }

// // Get the list of items
// const itemList = document.getElementById("itemList");

// for (let listItem of itemList.children) {
//   console.log(listItem.textContent);
// }

// //Homework

// // Example using a combination of loops to calculate and print squares of numbers

// // Array of numbers
// const nums = [2, 5, 8, 10];

// // Investigate for a method that exists on arrays, with help of which
// // we can add element to the end of an array!
// // Calculate squares using a for loop and use that method to fill the squares array
// const squares = [];
// for (let i = 0; i < nums.length; i++) {
//   // add code here
// }

// // Create new array, then calculate squares using a for-of loop, and fill the new array
// // Declare new var "newSquares" here and assign empty array to it here!
// for (let square of squares) {
//   // add code here
// }

// // Print squares using a for loop with the help of console.log
// for (let i = 0; i < newSquares.length; i++) {
//   // add code here
// }
