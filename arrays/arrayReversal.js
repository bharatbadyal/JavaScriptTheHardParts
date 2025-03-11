// Function to reverse an array
function reverseArray(arr) {
  let reversedArr = []; // Empty array to store the reversed elements

  // Loop through the original array backwards
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }

  return reversedArr;
}

// Example array
let originalArray = [1, 2, 3, 4, 5];

// Reversing the array
let reversedArray = reverseArray(originalArray);

// Output the result
console.log("Original Array:", originalArray);
console.log("Reversed Array:", reversedArray);

// Define the Node class
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Define the LinkedList class
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Add a node at the end
  append(data) {
    let newNode = new Node(data);

    // If the list is empty, make the new node the head
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;

      // Traverse to the last node
      while (current.next !== null) {
        current = current.next;
      }

      // Set the next of the last node to the new node
      current.next = newNode;
    }
  }

  // Display the linked list
  display() {
    let current = this.head;
    let output = "";

    // Traverse and collect data from each node
    while (current !== null) {
      output += current.data + " -> ";
      current = current.next;
    }

    console.log(output + "null");
  }
}

// Create a new linked list and add some nodes
let list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);

// Display the linked list
list.display();

function bubbleSort(arr) {
  let n = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap elements
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
    n--; // Reduce the range of comparison
  } while (swapped);
  return arr;
}

// Example usage
let numbers = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", bubbleSort(numbers));

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    // Move elements of arr[0..i-1], that are greater than key, to one position ahead
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }

    // Insert the key into the correct position
    arr[j + 1] = key;
  }
  return arr;
}

// Example usage:
let arr = [12, 11, 13, 5, 6];
console.log("Original Array:", arr);
arr = insertionSort(arr);
console.log("Sorted Array:", arr);
// Bubble Sort
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// Selection Sort
function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // Swap
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}

// Insertion Sort
function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

// Testing the sorting functions
let array = [64, 25, 12, 22, 11];

console.log("Original Array:", [...array]);
console.log("Bubble Sort:", bubbleSort([...array]));
console.log("Selection Sort:", selectionSort([...array]));
console.log("Insertion Sort:", insertionSort([...array]));

// Function to calculate percentage
function calculatePercentage(marks, totalMarks) {
  // Calculate total marks obtained
  let totalObtained = marks.reduce((acc, mark) => acc + mark, 0);

  // Calculate the total maximum marks
  let totalMaxMarks = totalMarks * marks.length;

  // Calculate percentage
  let percentage = (totalObtained / totalMaxMarks) * 100;

  return percentage;
}

// Example usage
let marks = [85, 90, 78, 88]; // Marks obtained in different subjects
let totalMarksPerSubject = 100; // Maximum marks per subject

let percentage = calculatePercentage(marks, totalMarksPerSubject);

console.log(`The percentage is: ${percentage.toFixed(2)}%`);

function reverseString(str) {
  return str.split("").reverse().join("");
}

const originalString = "hello";
const reversedString = reverseString(originalString);
console.log(reversedString); // Output: "olleh"

function isPrime(num) {
  // Check if number is less than 2, as 0 and 1 are not prime
  if (num <= 1) {
    return false;
  }

  // Loop from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(num); i++) {
    // If num is divisible by i, it's not prime
    if (num % i === 0) {
      return false;
    }
  }

  // If no divisor was found, it's prime
  return true;
}

// Test the function
let number = 29;
if (isPrime(number)) {
  console.log(`${number} is a prime number.`);
} else {
  console.log(`${number} is not a prime number.`);
}

function countCharacters(str) {
  return str.length;
}

// Example usage
const inputString = "Hello, world!";
const characterCount = countCharacters(inputString);

console.log("Number of characters:", characterCount);
// A function that returns a Promise
function fetchData() {
  return new Promise((resolve, reject) => {
    const dataAvailable = true; // You can change this to false to simulate an error.

    setTimeout(() => {
      if (dataAvailable) {
        resolve("Data fetched successfully!"); // This will resolve the promise
      } else {
        reject("Error: Data not found!"); // This will reject the promise
      }
    }, 2000); // Simulating a delay of 2 seconds
  });
}

// Using the promise
fetchData()
  .then((message) => {
    console.log(message); // This will run if the promise is resolved
  })
  .catch((error) => {
    console.log(error); // This will run if the promise is rejected
  });
// Function to count characters in an array of strings
function countCharacters(arr) {
  let charCount = 0;

  // Loop through each string in the array
  for (let i = 0; i < arr.length; i++) {
    charCount += arr[i].length; // Add the length of each string
  }

  return charCount;
}

// Example array of strings
const myArray = ["apple", "banana", "cherry"];

// Call the function and print the result
const totalCharacters = countCharacters(myArray);
console.log("Total characters in array:", totalCharacters);

// Basic Bit Manipulation in JavaScript

// Function to perform AND operation
function bitwiseAND(a, b) {
  return a & b;
}

// Function to perform OR operation
function bitwiseOR(a, b) {
  return a | b;
}

// Function to perform XOR operation
function bitwiseXOR(a, b) {
  return a ^ b;
}

// Function to perform Left Shift
function leftShift(a, n) {
  return a << n;
}

// Function to perform Right Shift
function rightShift(a, n) {
  return a >> n;
}

// Function to toggle a bit at a given position
function toggleBit(num, pos) {
  return num ^ (1 << pos);
}

// Function to check if a bit is set at a given position
function isBitSet(num, pos) {
  return (num & (1 << pos)) !== 0;
}

// Example usage
let a = 5,
  b = 3; // 5 = 0101, 3 = 0011

console.log("Bitwise AND:", bitwiseAND(a, b)); // Output: 1  (0001)
console.log("Bitwise OR:", bitwiseOR(a, b)); // Output: 7  (0111)
console.log("Bitwise XOR:", bitwiseXOR(a, b)); // Output: 6  (0110)
console.log("Left Shift 5 by 1:", leftShift(a, 1)); // Output: 10 (1010)
console.log("Right Shift 5 by 1:", rightShift(a, 1)); // Output: 2 (0010)
console.log("Toggle bit at position 1 in 5:", toggleBit(a, 1)); // Output: 7 (0111)
console.log("Is bit set at position 2 in 5?", isBitSet(a, 2)); // Output: true

// Coersion
// Example 1: Coercion in arithmetic operations
let num = 10;
let str = "5";

let result = num + str; // Coercion happens here: number 10 is coerced to string "10"
console.log(result); // Output: "105" (string concatenation)

// Example 2: Coercion in logical operations
let truthyValue = "hello"; // A non-empty string is truthy
let falsyValue = 0; // 0 is falsy

console.log(truthyValue && falsyValue); // Coercion happens: 0 is considered falsy, so output is 0
console.log(truthyValue || falsyValue); // Coercion happens: "hello" is truthy, so output is "hello"

// Example 3: Coercion in comparison
let x = 5;
let y = "5";

console.log(x == y); // Coercion happens: string "5" is coerced to number 5, output is true
console.log(x === y); // No coercion: different types (number vs string), output is false

// Example 4: Coercion when using a boolean context
let value = "hello"; // Non-empty string is truthy
console.log(Boolean(value)); // Coercion: value is converted to true

let emptyValue = "";
console.log(Boolean(emptyValue)); // Coercion: empty string is converted to false

// Example 5: Coercion when using Number(), String(), and Boolean()
let number = "123"; // String
let coercedToNumber = Number(number); // Coercion from string to number
console.log(coercedToNumber); // Output: 123 (as a number)

let booleanValue = 0; // Number
let coercedToBoolean = Boolean(booleanValue); // Coercion from number to boolean
console.log(coercedToBoolean); // Output: false (0 is falsy)

let coercedToString = String(coercedToNumber); // Coercion from number to string
console.log(coercedToString); // Output: "123" (as a string)

// Hoisting with Function Declarations
function testHoisting() {
  console.log("Function Hoisting Example:");

  // Variable Hoisting with var
  console.log(myVar); // undefined due to hoisting
  var myVar = "This is a hoisted variable";
  console.log(myVar); // prints: "This is a hoisted variable"

  // Function Hoisting with Function Declaration
  hoistedFunction(); // works because function declarations are hoisted
  function hoistedFunction() {
    console.log("This function is hoisted!");
  }

  // Hoisting with let/const
  try {
    console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
  } catch (error) {
    console.log(error.message);
  }

  // Let/Const variables are hoisted but not initialized
  let myLet = "This is a hoisted let variable";
  const myConst = "This is a hoisted const variable";

  console.log(myLet); // works after initialization
  console.log(myConst); // works after initialization

  // Function Expression hoisting
  try {
    myFunc(); // TypeError: myFunc is not a function
  } catch (error) {
    console.log(error.message);
  }

  var myFunc = function () {
    console.log("This is a function expression.");
  };

  myFunc(); // Works now because the function expression is assigned after execution
}

// Call the function to test hoisting
testHoisting();
// A simple function that accepts a callback
function fetchData(callback) {
  console.log("Fetching data...");
  setTimeout(() => {
    const data = { name: "John", age: 30 };
    console.log("Data fetched successfully!");
    callback(data); // Call the callback function with the data
  }, 2000);
}

// A callback function that processes the fetched data
function processData(data) {
  console.log("Processing data...");
  console.log(`Name: ${data.name}, Age: ${data.age}`);
}

// Calling the fetchData function and passing the processData function as a callback
fetchData(processData);
