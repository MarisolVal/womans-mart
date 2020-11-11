const express = require('express');

const app = express();

// NOTE: Agregar Rutas
app.use(require('./formulario'));





module.exports = app;