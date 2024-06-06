const express = require("express");
const path = require("path");

const app = express();
const port = 3001;

// Serve the static files from the the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
