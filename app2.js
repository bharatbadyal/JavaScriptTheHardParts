const express = require("express");
const app = express();
const port = 3000;

// Serve static files (like CSS, JS, images) from the "public" folder
app.use(express.static("public"));

// Route for the homepage
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>My Basic Website</title>
        <link rel="stylesheet" type="text/css" href="/styles.css">
      </head>
      <body>
        <h1>Welcome to My Website</h1>
        <p>This is a simple Express.js website.</p>
      </body>
    </html>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
