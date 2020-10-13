const express = require('express');
const app = express();
var listaF = new Array();
var listaM = new Array();
const hbs = require('hbs');
// hbs.registerPartials(__dirname + '../public/view');
app.set('views', 'public/view');
app.set('view engine', 'hbs');


var formFem = {
    "Ninguna": 0,
    "Barrer": 0,
    "platos": 0,
    "Cocinar": 0,
    "Planchar": 0,
    "super": 0,
    "ropa": 0,
};

var formMas = {
    "Ninguna": 0,
    "Barrer": 0,
    "platos": 0,
    "Cocinar": 0,
    "Planchar": 0,
    "super": 0,
    "ropa": 0,
};


app.get('/cargarAct', (req, res) => {
    var actividad = req.query.actividad;
    var genero = req.query.genero;
    actividad = actividad.split(' ');
    actividad = actividad[actividad.length - 1];

    if (genero === 'femenino') {
        formFem[actividad] += 1;

    } else {
        formMas[actividad] += 1;
    }

    res.render('resultados', { fm: formFem, fh: formMas });
});


app.post('/cargarAct', (req, res) => {
    var actividad = req.body.actividad;
    var genero = req.body.genero;
    actividad = actividad.split(' ');
    actividad = actividad[actividad.length - 1];
    console.log(genero);
    if (genero === 'femenino') {
        formFem[actividad] += 1;
    } else {
        formMas[actividad] += 1;
    }
    res.render('resultados', { fm: formFem, fh: formMas });

});

app.put('/cargarAct/:genero', (req, res) => {
    var genero = req.params.genero;
    var actividad = req.body.actividad;
    var cantidad = req.body.cantidad;
    actividad = actividad.split(' ');
    actividad = actividad[actividad.length - 1];
    console.log(genero);
    if (genero === 'femenino') {
        formFem[actividad] = cantidad;
    } else {
        formMas[actividad] = cantidad;
    }
    res.render('resultados', { fm: formFem, fh: formMas });

});
app.delete('/cargarAct/:genero', (req, res) => {
    var genero = req.params.genero;
    var actividad = req.body.actividad;
    if (genero === 'femenino') {
        formFem[actividad] = 0;
    } else {
        formMas[actividad] = 0;
    }

    res.render('resultados', { fm: formFem, fh: formMas });
});

app.delete('/borrarTodo', (req, res) => {

    for (const actividad in formFem) {
        formFem[actividad] = 0;
        formMas[actividad] = 0;
    }

    res.render('resultados', { fm: formFem, fh: formMas });
});

module.exports = app;