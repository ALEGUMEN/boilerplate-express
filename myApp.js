require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

// Middleware de logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

// Middleware para archivos estáticos
app.use('/public', express.static(path.join(__dirname, 'public')));

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Ruta /json
app.get('/json', (req, res) => {
  let message = "Hello json";
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    message = message.toUpperCase();
  }
  res.json({ message });
});

module.exports = app;

