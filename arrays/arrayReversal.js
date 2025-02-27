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
