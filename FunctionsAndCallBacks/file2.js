function tenSquared() {
  return 10 * 10;
}

console.log(tenSquared());

function numSquare(num) {
  return num * num;
}

console.log(numSquare(15));

// GENERALIZING FUNCTION
// "Parameters"(placeholders) meaen we don't need to decide what data to run our functionality on until we run the function
// --- Then provide an actual value ('argument') when we run the function

// Higher order function follow this same principle.
// -- We may not want too decide exactly what some of our functionalty is until we run our function.

function copyArrayMultiplyBy2(array) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] * 2);
  }
  return output;
}

const myArray = [1, 2, 3];
const result = copyArrayMultiplyBy2(myArray);
console.log(result);

// We could generalize our funciton  - so we pass in our specific Instruction only when we run copyArrayAndManipulate!

function copyArrayAndManipulate(array, instructions) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]));
  }
  return output;
}

function multipleBy2(input) {
  return input * 2;
}
const result2 = copyArrayAndManipulate([1, 2, 3, 4], multipleBy2);
console.log(result2);

// HOW WAS THIS POSSIBLE?
// Function in JavaScript = first Class objects
// They can co-exist with and can treated like any other javascript object
// 1. Assigned to variables and properties of other objects
// 2. Passed as an argument into functions
// 3. Returned as values from functions

function operation(num) {
  return num + num;
}

function doOperation(num, operation) {
  let result = operation(num);
  return result;
}

let opRes = doOperation(112, operation);
console.log(opRes);
