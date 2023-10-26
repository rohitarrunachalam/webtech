// Import the Express.js library
const express = require('express');

// Create an Express application
const app = express();

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, World! This is the root route.');
});

// Define a route for '/about'
app.get('/about', (req, res) => {
  res.send('This is the About page.');
});

// Define a route for '/contact'
app.get('/contact', (req, res) => {
  res.send('Contact us at contact@example.com');
});

// Start the server and listen on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
