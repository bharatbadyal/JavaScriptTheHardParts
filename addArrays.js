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

// A function that returns a promise
function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulate an async operation (like fetching data)
    setTimeout(() => {
      const success = true; // Change this to false to test error handling

      if (success) {
        resolve("Data fetched successfully!"); // Resolve with success message
      } else {
        reject("Failed to fetch data."); // Reject with an error message
      }
    }, 2000); // Simulate a 2-second delay
  });
}

// Call the fetchData function and handle the promise
fetchData()
  .then((result) => {
    console.log(result); // If resolved, log the success message
  })
  .catch((error) => {
    console.error(error); // If rejected, log the error message
  })
  .finally(() => {
    console.log("Promise operation is complete.");
  });

function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Check if the string is equal to its reverse
  let reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

// Example usage
let input = "A man, a plan, a canal, Panama";
if (isPalindrome(input)) {
  console.log(input + " is a palindrome.");
} else {
  console.log(input + " is not a palindrome.");
}

// Function to reverse an array
function reverseArray(arr) {
  let reversedArr = [];

  // Loop through the array in reverse order and push elements into the new array
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }

  return reversedArr;
}

// Example usage
let myArray = [1, 2, 3, 4, 5];
console.log("Original array:", myArray);
let reversed = reverseArray(myArray);
console.log("Reversed array:", reversed);

// Generate a random number between 0 and 1
let randomNum = Math.random();
console.log(randomNum);

// If you want to generate a random number between a range, for example, between 1 and 100:
let min = 1;
let max = 100;
let randomInRange = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomInRange);
