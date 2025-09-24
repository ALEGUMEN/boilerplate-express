require('dotenv').config(); // <-- carga las variables de entorno
const express = require('express');
const path = require('path');
const app = express();

// Middleware para servir archivos estáticos
app.use('/public', express.static(path.join(__dirname, 'public')));

// Ruta raíz: enviar index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Ruta API: responder con JSON en /json
app.get('/json', (req, res) => {
  let message = "Hello json";

  // Revisar variable de entorno
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    message = message.toUpperCase();
  }

  res.json({ message: message });
});

// Exportar la app
module.exports = app;

