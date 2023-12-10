const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Use EJS
app.set('view engine', 'ejs');

// Serve static files
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/bulma', express.static(path.join(__dirname, 'node_modules/bulma/css')));

// Routes
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/testimonials', (req, res) => {
  res.render('testimonials');
});

app.get('/workout-of-the-day', (req, res) => {
  res.render('wotd');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});