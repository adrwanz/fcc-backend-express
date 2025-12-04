let express = require('express');
let app = express();

// Ejercicio: crear la ruta /json
app.get("/json", (req, res) => {
  res.json({
    message: "Hello json"
  });
});

module.exports = app;
