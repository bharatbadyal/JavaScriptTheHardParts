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
