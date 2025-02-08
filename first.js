// const nameOfCourse = "Namaste NodeJs";
// Modules protext their variables and function from leaking
// console.log(nameOfCourse);
// console.log(global);
// console.log(this); // this give empty object here (in browser it gives global object  )
// console.log(globalThis);

function calculateSum(a, b) {
  console.log(a + b);
}

function division(a, b) {
  console.log(a / b);
}

console.log(module.exports); // module.exports is an empty object
module.exports = { calculateSum, division };
