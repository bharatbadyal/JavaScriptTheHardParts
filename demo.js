// function square(a) {
//   return a * a;
// }

// function cube(a) {
//   return a * a * a;
// }

// function quad(a) {
//   return a * a * a * a;
// }

// function sumOfSquare(a, b, fun) {
//   let square1 = fun(a);
//   let square2 = fun(b);
//   return square1 + square2;
// }

// let sum = sumOfSquare(2, 3, quad); // callback:--- passing a funtion as an argument
// console.log(sum);

// <-- write a funtion to read content from text file and print it -->
const fs = require("fs");
// fs.readFile("a.txt", "utf-8", function (err, data) {
//   console.log(err);
//   console.log(data);
//   data += "This is added content.";
//   fs.writeFile("a.txt");
//   console.log(data);
// });

// console.log("done");

// function putCopyrightToFile(cb) {}
// fs.readFile("a.txt", "utf8", function (err, data) {
//   data += data + "CopyRight Bharat 2024";
//   fs.writeFile("a.txt", function () {
//     cb();
//   });
// });

// putCopyrightToFile(function () {
//   console.log("copyright has been written.");
// });

// demo promise\\
function promisifyMySetTimeout(duration) {
  const myOwnPromise = new Promise(function executor(resolve, reject) {
    setTimeout(() => {
      console.log("Inside setTimeout function");
    }, duration);
  });
}

promisifyMySetTimeout(1000);
