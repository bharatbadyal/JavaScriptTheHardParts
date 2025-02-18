// Function to add two arrays element-wise
function addArrays(array1, array2) {
  let result = [];

  // Ensure both arrays are of the same length
  let length = Math.min(array1.length, array2.length);

  for (let i = 0; i < length; i++) {
    result.push(array1[i] + array2[i]);
  }

  return result;
}

// Example arrays
let array1 = [1, 2, 3, 4];
let array2 = [5, 6, 7, 8];

// Call the function and log the result
let sumArray = addArrays(array1, array2);
console.log(sumArray);

// Basic addition program in JavaScript

// Function to add two numbers
function addNumbers(num1, num2) {
  return num1 + num2;
}

// Example usage
let number1 = 5;
let number2 = 10;

let result = addNumbers(number1, number2);

console.log("The sum of " + number1 + " and " + number2 + " is: " + result);
