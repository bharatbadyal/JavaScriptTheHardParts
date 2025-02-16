// Import necessary modules
const express = require("express");
const app = express();
const router = express.Router();

// Use JSON middleware to handle JSON data in requests
app.use(express.json());

// Example Data - Simulating a simple data store (e.g., in-memory database)
let users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
];

// Routes - Handling Basic CRUD Operations

// Get all users
router.get("/users", (req, res) => {
  res.status(200).json(users);
});

// Get a specific user by ID
router.get("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json(user);
});

// Create a new user
router.post("/users", (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required" });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Update a user's details
router.put("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const { name, email } = req.body;

  const user = users.find((u) => u.id === userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  user.name = name || user.name;
  user.email = email || user.email;
  res.status(200).json(user);
});

// Delete a user
router.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users.splice(userIndex, 1);
  res.status(200).json({ message: "User deleted successfully" });
});

// Use the router for handling requests
app.use("/api", router);

// Set the server to listen on port 3000
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
