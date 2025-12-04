let express = require('express');
let app = express();
console.log("Hello World");
// Ejercicio: crear la ruta /json
app.get("/json", (req, res) => {
  res.json({
    message: "Hello World"
  });
});

module.exports = app;
