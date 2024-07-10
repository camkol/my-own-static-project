// Importing the 'express' module
const express = require("express");

// Importing the 'path' module
const path = require("path");

// Importing the 'body-parser' module
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

let items = [];

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve the static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// API endpoint to get items
app.get("/api/items", (req, res) => {
  res.json(items);
});

// API endpoint to add an item
app.post("/api/items", (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json(newItem);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
