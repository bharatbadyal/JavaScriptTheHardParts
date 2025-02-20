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

function isPrime(num) {
  if (num <= 1) {
    return false; // Numbers less than or equal to 1 are not prime
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // If num is divisible by any number other than 1 and itself, it's not prime
    }
  }

  return true; // If no divisors were found, the number is prime
}

// Example usage
console.log(isPrime(11)); // true
console.log(isPrime(15)); // false

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false; // If divisible by any number other than 1 and itself, it's not prime
    }
  }
  return true; // If not divisible by any number, it's prime
}

// Function to find and print prime numbers up to a limit
function findPrimes(limit) {
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) {
      console.log(i); // Print prime numbers
    }
  }
}

// Example usage: find primes up to 100
findPrimes(100);
