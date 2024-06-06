# My Own Static Project

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Instuctions](#instuctions)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

<!-- - View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating -->

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- [Bootstrap](https://getbootstrap.com/) - CSS library
- CSS custom properties
- [Sass](https://sass-lang.com/) - Preprocessor scripting language
- Flexbox
- CSS Grid
- Mobile-first workflow
- Mobile-Responsive Design
- JavaScript - Scripting language
- [jQuery](https://jquery.com/) - JS library
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles
- [Photoshop](https://www.adobe.com/products/photoshop.html) - Image editor

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### Instructions

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

#### 2. Setup a Server to Serve Static Files

1. **Create a Directory for Static Files**:

```bash
mkdir public
```

2. **Create an HTML File**:
   Place an `index.html` file in the `public` directory with some sample content:

```html
<!-- public/index.html -->
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

```javascript

// server.js
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(\_\_dirname, 'public')));

// Start the server
app.listen(port, () => {
console.log(`Server is running on http://localhost:${port}`);
});
```

4. **Run the Server**:

```bash
node server.js
```

5. **Access the Server**:
   Open your browser and navigate to `http://localhost:3000`. You should see your "Hello, World!" message from the `index.html` file.

#### Summary of Project Structure

Your project structure should look like this:

```java

my-node-project/
├── node_modules/
├── public/
│ └── index.html
├── package.json
├── package-lock.json
└── server.js
```

### What I learned

<!-- - node file.js runs the javascript file
- jshint is a tool in command line to scan all javascript code for errors
- the way to export and import modules
- use of node modules: path, os, fileSystem, event, and http

To see how you can add code snippets, see below:
 -->

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Cameron Howze](https://camkol.github.io/)
- Frontend Mentor - [@camkol](https://www.frontendmentor.io/profile/camkol)
- GitHub- [@camkol](https://github.com/camkol)
- LinkedIn - [@cameron-howze](https://www.linkedin.com/in/cameron-howze-28a646109/)
- E-Mail - [cameronhowze4@outlook.com](mailto:cameronhowze4@outlook.com)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
