console.log("Start");
// time expensive code
let k = 0;

console.log(Date.now());
function expensive() {
  for (let i = 0; i < 1000; i++) {
    for (let j = 0; j < 1000; j++) {
      k = i + j;
    }
  }
  console.log("k", k);
}

setTimeout(() => {
  expensive_1();
  console.log("Last", Date.now());
}, 0);

setTimeout(() => {
  expensive_2();
  console.log("Last", Date.now());
}, 0);

// Homework
setInterval();

console.log("End");
console.log(Date.now());
