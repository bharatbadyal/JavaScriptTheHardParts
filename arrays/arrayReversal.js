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
  return str.split('').reverse().join('');
}

const originalString = "hello";
const reversedString = reverseString(originalString);
console.log(reversedString); // Output: "olleh"
