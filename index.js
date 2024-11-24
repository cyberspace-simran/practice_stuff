const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

function getWelcomeMessage() {
  return 'Welcome to our service!';
}
app.get('/welcome', (req, res) => {
  res.send(getWelcomeMessage());
});

function getGreetingMessage(username) {
  return 'Hello, ' + username + '!';
}

app.get('/greet', (req, res) => {
  let username = req.query.username;
  res.send(getGreetingMessage(username));
});

function checkPassword(password) {
  console.log(password.length);
  if (password.length > 15) {
    return 'Password is strong' + password.length;
  } else {
    return 'Password is weak';
  }
}
app.get('/check-password', (req, res) => {
  let password = req.query.password;
  res.send(checkPassword(password));
});

function calculateDiscountedPrice(price, discount) {
  let finalPrice = price - (price * discount) / 100;
  return finalPrice.toString();
}

app.get('/discounted-price', (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  res.send(calculateDiscountedPrice(price, discount));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
