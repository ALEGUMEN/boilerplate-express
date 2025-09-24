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

// Middleware que agrega la hora al request
const addCurrentTime = (req, res, next) => {
  req.time = new Date().toString();
  next(); 
};

// Ruta /now con middleware encadenado
app.get('/now', addCurrentTime, (req, res) => {
  res.json({ time: req.time });
});

app.get('/:word/echo', (req, res) => {
  const word = req.params.word; 
  res.json({ echo: word });
});

// Ruta /name que recibe query parameters
app.get('/name', (req, res) => {
  // req.query contiene los parámetros de la URL
  const firstName = req.query.first;
  const lastName = req.query.last;

  // Respondemos con JSON
  res.json({ name: `${firstName} ${lastName}` });
});

module.exports = app;

