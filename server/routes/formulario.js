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

// // app.put('/formulario',(req,res)=>{

// // });


module.exports = app;