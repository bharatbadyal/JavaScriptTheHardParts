// DOM Manipulation
// get the element  ------ Event listening
document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    console.log(this);
  });
//using arrow function it will give the global context so always use named function or anonymos function
import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Home Page</h1>");
});

app.get("/twiter", (req, res) => {
  res.send("<h1>Welcome to the Twitter Page</h1>");
});

app.listen(port, () => {
  console.log(`Listning to port no:${port}`);
});
