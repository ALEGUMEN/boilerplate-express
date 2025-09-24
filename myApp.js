require('dotenv').config(); // <-- carga las variables de entorno
const express = require('express');
const path = require('path');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/json', (req, res) => {
  let message = "Hello json";
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    message = message.toUpperCase();
  }
  res.json({ message });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// Exportar la app
module.exports = app;

