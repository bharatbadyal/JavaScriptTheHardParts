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
