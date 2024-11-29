
const express = require('express');


const app = express();


const requestLogger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);  // Log the method and URL
  next();  // Pass control to the next middleware or route handler
};


app.use(requestLogger);


app.get('/', (req, res) => {
  res.send('Hello, World!');
});


app.get('/about', (req, res) => {
  res.send('About Page');
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
