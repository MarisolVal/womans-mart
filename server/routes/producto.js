
const express = require('express');
const Producto = require('../models/producto');


const app = express();

app.get('/catalogo', function(req, res) {
       
    let desde = req.query.desde || 0; //desde donde se quiere obtener la info
    desde = Number(desde);

    let limite = req.query.limite || 3;//cuantos elementos se muestran
    limite = Number(limite);

    Producto.find({}, 'nombre')
            .skip(desde)
            .limit(limite)
            .exec((err, productos) => {
                if(err){
                    res.status(400).json({
                        ok: false,
                        err
                    });
                }
                Producto.count({}, (err,conteo)=> {
                    res.json({
                        ok:true,
                        productos,
                        cuantos: conteo
                    });
                });
            });
});

app.post('/producto', function(req, res) {

    let body = req.body;

    let producto = new Producto({
        nombre: body.nombre,
        precio: body.precio,
        descripcion: body.descripcion,
    });

    producto.save((err, productoDB) => {
        if(err){
            res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok:true,
            producto: productoDB
        });
    });

});

app.put('/producto/:id', function(req, res) {

    let id = req.params.id;

    res.json({
        id
    });
});

app.delete('/producto/:id', function(req, res) {
    let id = req.params.id;

    Producto.findByIdAndRemove(id, (err, productoBorrado) =>{

        if(err){
            res.status(400).json({
                ok: false,
                err
            });
        }
        if(productoBorrado === null){
            res.status(400).json({
                ok: false,
                err: 'Producto no encontrado'
            
            });
        }

        res.json({
            ok:true,
            producto: productoBorrado
        });
    });
});


module.exports = app;