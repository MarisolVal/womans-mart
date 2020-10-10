const express = require('express');
const app = express();
var listaF = new Array();
var listaM = new Array();

var formFem = {
    "Barrer": 0,
    "Lavar los platos": 0,
    "Cocinar": 0,
    "Planchar": 0,
    "Ir al super": 0,
    "Lavar la ropa": 0,
};

var formMas = {
    "Barrer": 0,
    "Lavar los platos": 0,
    "Cocinar": 0,
    "Planchar": 0,
    "Ir al super": 0,
    "Lavar la ropa": 0,
};

function cargarAct(req, res) {
    res.render('formulario/cargarAct', {
        listaF: listaF,
        listaM: listaM
    });
}

app.get('/cargarAct', (req, res) => {
    var actividad = req.query.actividad;
    var genero = req.query.genero;

    if (genero === 'femenino') {
        formFem[actividad] += 1;
        return res.json({
            genero,
            formFem
        });
    } else {
        formMas[actividad] += 1;
        return res.json({
            genero,
            formMas
        });
    }
});


app.post('/cargarAct', (req, res) => {
    var actividad = req.body.actividad;
    var genero = req.body.genero;
    console.log(genero);
    if (genero === 'femenino') {
        formFem[actividad] += 1;
        return res.json({
            genero,
            formFem
        });
    } else {
        formMas[actividad] += 1;
        return res.json({
            genero,
            formMas
        });
    }

});

// app.put('/formulario',(req,res)=>{

// });


module.exports = app;