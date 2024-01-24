import fetch from "node-fetch";

// console.log("Start");
// // time expensive code
// let k = 0;

// console.log(Date.now());
// function expensive() {
//   for (let i = 0; i < 1000; i++) {
//     for (let j = 0; j < 1000; j++) {
//       k = i + j;
//     }
//   }
//   console.log("k", k);
// }

// // Web API
// setTimeout(() => {
//   expensive_1();
//   console.log("Last", Date.now());
// }, 5000); // --> ms

// setTimeout(() => {
//   expensive_2();
//   console.log("Last", Date.now());
// }, 0);

// // Homework
// setInterval();

console.log("End");
console.log(Date.now());

// const car = {
//   type: "GLE",
//   driveCar() {
//     console.log(`${this.make} is best car in the world.`);
//   },
// };

// const truck = {
//   type: "Actros",
//   driveTruck() {
//     console.log(`${this.type} is best truck in the world `);
//   },
// };

// console.log(truck.driveTruck.call(car));

/*************
 * FRONTEND 57
 ************/

// Promise - resolved, rejected and pending.
// const myPromise = new Promise((resolve, reject) => {
//   // call to outer server that returns 'data'
//   if(/* call succesfull */) { resolve(data) } else { reject(error) }
// });

// myPromise.then((data) => {
//   // handle 'data' from the server
// }, (error) => {
//   // handle 'error' in the app
// });

// Fetch method
const url = "https://pokeapi.co/api/v2/pokemon";
// const options = {
//   method: "GET",
// };

const response = fetch(url /*options*/); // --> new Promise(() => {})
response.then((data) => {
  data.text().then((text) => {
    console.log(text);
  });
});
// const result = await response.text();
// console.log(result);
