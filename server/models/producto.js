const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let productoSchema = new Schema({
    nombre:{
        type: String,
        required: [true, 'El nombre del producto es necesario'],
    },
    precio: {
        type: Number,
        required: [true, 'El precio es necesario']
    },
    descripcion: {
        type: String,
        required: true
    },
    // img: {}
});

module.exports = mongoose.model('Producto', productoSchema);