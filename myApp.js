const express = require('express');
const path = require('path');
const app = express();

// Middleware para servir archivos estáticos en /public
app.use('/public', express.static(path.join(__dirname, 'public')));

// Ruta raíz: enviar index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Nueva ruta API: responder con JSON en /json
app.get('/json', (req, res) => {
  res.json({ message: "Hello json" });
});

// Exportar la app
module.exports = app;
