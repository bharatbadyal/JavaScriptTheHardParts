const num = 3;
function multiplyBy2(inputNumber) {
  const result = inputNumber * 2;
  return result;
}

const output = multiplyBy2(num);
const newOutput = multiplyBy2(10);

// JavaScript Priinciples

//When javascript code runs, it:
// --: Goes through the code line by line and runs "executes" each line knnown as the "thread of Execution"

// --: Saves 'data' like  strings and arrays so we can use that data later - in its memory. We can even save code('functions')

// a function being run is like mini program. when ever we run program an "Global execution context" created and every funciton create it too("local execution context") each time it get called.

//FUNCTIONS
// -- code we save('define') functions and can use (call/invoke/execute/run) later with the functions name &()

//Execution context

// Created to run the code  of a function - has 2 parts (we've already seen it up)  01:- Thread of execution 02:- Memory

// CALL STACK
// - Javascript keeps track of what function is currently running (where's t hte thread of execution)
// - Run a function - add to the call stack
// - Finish running the function - JS removes it from call stack
// Whatever is top of the call stack - that's the function we'er currently running
