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
