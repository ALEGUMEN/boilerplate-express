// Importa Express
const express = require('express');
const app = express();

// Ruta raíz: responde a GET / con "Hello Express"
app.get('/', (req, res) => {
  res.send('Hello Express');
});

module.exports = app;
