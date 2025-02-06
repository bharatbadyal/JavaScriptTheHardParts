// DOM Manipulation
// get the element  ------ Event listening
document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    console.log(this);
  });
//using arrow function it will give the global context so always use named function or anonymos function
