# My Own Static Project

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Instructions](#instructions)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Enter item name and price
- After pressing `Add`, item will be added to the list

### Screenshot

![](./screen.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- JavaScript - Scripting language
- [Node.js](https://nodejs.org/)

### What I learned

Learned how to setup a static server

### Continued development

I am going to turn this into a React App next.

## Instructions

### Setting up a Static Project

#### 1. Setup a Node.js Project

1. **Install Node.js**: If you haven't already, download and install [Node.js](https://nodejs.org/).

2. **Create a Project Directory**:

```bash
mkdir my-node-project
cd my-node-project
```

3. **Initialize the Project**:

```bash
npm init -y
```

This will create a `package.json` file with default settings.

4. **Install Express**: Express is a fast, unopinionated, minimalist web framework for Node.js.

```bash
npm install express
```

`express`: This module is a popular web framework for Node.js. It provides a set of features and utilities to build web applications. By importing express, you can create an instance of the Express application and use its methods and middleware.

#### 2. Setup a Server to Serve Static Files

1. **Create a Directory for Static Files**:

```bash
mkdir public
```

2. **Create an HTML File**:
   Place an `index.html` file in the `public` directory with some sample content:

`index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Static Site</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
  </body>
</html>
```

3. **Create the Server File**:
   Create a file named `server.js` in the root of your project directory:

`server.js`

```javascript
// Importing the 'express' module
const express = require("express");

// Importing the 'path' module
const path = require("path");

const app = express();
const port = 3001;

// Serve static files from the "public" directory
app.use(express.static(path.join(\_\_dirname, 'public')));

// Start the server
app.listen(port, () => {
console.log(`Server is running on http://localhost:${port}`);
});
```

`path`: This module provides utilities for working with file and directory paths. It is commonly used to manipulate file paths and resolve relative paths.

`body-parser`: This module is used to parse the body of incoming HTTP requests. It extracts the data from the request body and makes it available in a more convenient format for your application to process. It supports various formats such as JSON, URL-encoded, and multipart form data.

4. **Run the Server**:

```bash
node server.js
```

5. **Access the Server**:
   Open your browser and navigate to `http://localhost:3000`. You should see whatever is on the `index.html` file.

### Summary of Project thus far

Your project so far should look like this:

`index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Static Site</title>
  </head>

  <body>
    <h1>Static</h1>

    <form id="itemForm">
      <input type="text" name="name" placeholder="Item" required />
      <input type="text" name="price" placeholder="Price" required />
      <button>Add</button>
    </form>

    <h2>List:</h2>
    <ul id="list"></ul>

    <script src="app.js"></script>
  </body>
</html>
```

`app.js`

```js
// Select the form with the ID "itemForm" and store it in the itemForm variable
const itemForm = document.querySelector("#itemForm");

// Select the unordered list with the ID "list" and store it in the listContainer variable
const listContainer = document.querySelector("#list");

// Add an event listener to the itemForm that listens for the "submit" event
itemForm.addEventListener("submit", function (e) {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Select the input elements for name and price from the form
  const itemInput = itemForm.elements.name;
  const priceInput = itemForm.elements.price;

  // Call the addItem function with the values from the input elements
  addItem(itemInput.value, priceInput.value);

  // Clear the input fields after adding the item
  itemInput.value = "";
  priceInput.value = "";
});

// Function to add an item to the list
// Parameters: username (name of the item), tweet (price of the item)
const addItem = (username, tweet) => {
  // Create a new list item element
  const newItem = document.createElement("li");

  // Create a new bold element
  const bTag = document.createElement("b");

  // Append the username text to the bold element
  bTag.append(username);

  // Append the bold element to the new list item
  newItem.append(bTag);

  // Append the price text to the new list item, preceded by a dash
  newItem.append(` - ${tweet}`);

  // Append the new list item to the list container
  listContainer.append(newItem);
};

// Add an event listener to the list container that listens for click events
listContainer.addEventListener("click", function (e) {
  // If the clicked element is a list item, remove it from the list
  if (e.target.nodeName === "LI") {
    e.target.remove();
  }
});
```

`server.js`

```js
// Importing the 'express' module
const express = require("express");

// Importing the 'path' module
const path = require("path");

const app = express();
const port = 3001;

// Serve static files from the "public" directory
app.use(express.static(path.join(\_\_dirname, 'public')));

// Start the server
app.listen(port, () => {
console.log(`Server is running on http://localhost:${port}`);
});sole.log(`Server is running on http://localhost:${port}`);
});
```

```java
my-node-project/
├── node_modules/
├── public/
│ └── index.html
│ └── app.js
├──package.json
├── package-lock.json
└── server.js
```

### Detailed Steps to storing Functionality on server

#### 1. Update `server.js` to Handle API Requests

Modify `server.js` to handle GET and POST requests:

`server.js`

```javascript
// Importing the 'express' module
const express = require("express");

// Importing the 'path' module
const path = require("path");

// Importing the 'body-parser' module
const bodyParser = require("body-parser");

const app = express();
const port = 3001;

let items = [];

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve the static files from the "public" directory
app.use(express.static(path.join(\_\_dirname, "public")));

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
```

#### 2. Modify `app.js` to Fetch and Display Items

Update your `app.js` to fetch the list of items from the server and add new items via the API:

`app.js`

```javascript
// When the DOM content is fully loaded, fetch the existing items from the server
document.addEventListener("DOMContentLoaded", () => {
  fetchItems();
});

// Select the form with the ID "itemForm" and store it in the itemForm variable
const itemForm = document.querySelector("#itemForm");

// Select the unordered list with the ID "list" and store it in the listContainer variable
const listContainer = document.querySelector("#list");

// Add an event listener to the itemForm that listens for the "submit" event
itemForm.addEventListener("submit", function (e) {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Select the input elements for name and price from the form
  const itemInput = itemForm.elements.name;
  const priceInput = itemForm.elements.price;

  // Call the addItem function with the values from the input elements
  addItem(itemInput.value, priceInput.value);

  // Clear the input fields after adding the item
  itemInput.value = "";
  priceInput.value = "";
});

// Function to fetch existing items from the server
const fetchItems = async () => {
  // Make a GET request to the /api/items endpoint
  const response = await fetch("/api/items");

  // Parse the JSON response
  const items = await response.json();

  // Iterate over the items and add each one to the DOM
  items.forEach((item) => addItemToDOM(item.name, item.price));
};

// Function to add an item to the server and update the DOM
const addItem = async (name, price) => {
  // Make a POST request to the /api/items endpoint with the new item data
  const response = await fetch("/api/items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, price }),
  });

  // If the request is successful, parse the JSON response and add the item to the DOM
  if (response.ok) {
    const newItem = await response.json();
    addItemToDOM(newItem.name, newItem.price);
  }
};

// Function to add an item to the DOM
const addItemToDOM = (name, price) => {
  // Create a new list item element
  const newItem = document.createElement("li");

  // Create a new bold element
  const bTag = document.createElement("b");

  // Append the name text to the bold element
  bTag.append(name);

  // Append the bold element to the new list item
  newItem.append(bTag);

  // Append the price text to the new list item, preceded by a dash
  newItem.append(` - ${price}`);

  // Append the new list item to the list container
  listContainer.append(newItem);
};

// Add an event listener to the list container that listens for click events
listContainer.addEventListener("click", function (e) {
  // If the clicked element is a list item, remove it from the list
  if (e.target.nodeName === "LI") e.target.remove();
});
```

### Summary of Project Structure

Your project structure should look like this:

```java
my-node-project/
├── node_modules/
├── public/
│ └── index.html
│ └── app.js
├──package.json
├── package-lock.json
└── server.js
```

## Author

- Website - [Cameron Howze](https://camkol.github.io/)
- Frontend Mentor - [@camkol](https://www.frontendmentor.io/profile/camkol)
- GitHub- [@camkol](https://github.com/camkol)
- LinkedIn - [@cameron-howze](https://www.linkedin.com/in/cameron-howze-28a646109/)
- E-Mail - [cameronhowze4@outlook.com](mailto:cameronhowze4@outlook.com)

## Acknowledgments

My friend Daniel to push me to learn it.
