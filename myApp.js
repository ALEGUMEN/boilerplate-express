const express = require('express');
const app = express();

// Ruta raíz
app.get('/', (req, res) => {
  res.send('Hello Express');
});

// Servir archivos estáticos (opcional si tienes /public)
// app.use(express.static('public'));

// Puerto dinámico para Render o local
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


































 module.exports = app;
