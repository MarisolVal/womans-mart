const express = require('express');
const mongoose = require('mongoose');
const socketIO = require('socket.io');
const http = require('http');
const path = require('path');
const hbs = require('hbs');

const app = express();


let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

hbs.registerPartials(__dirname + '../public/view');
app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(require('./routes/index'));
app.use(require('./routes/producto'));

// IO = esta es la comunicacion del backend
module.exports.io = socketIO(server);
require('./routes/formulario');
require('./sockets/socket');

//=======
//Entorno
//=======

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//=======
//Base de datos
//=======

let urlDB;

if(process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/tienda';
}else{
    urlDB = 'mongodb+srv://MarisolV:4uLzDp5J7KP7MFje@cluster0.jlvbn.mongodb.net/tienda';
 }

process.env.URLDB = urlDB;

mongoose.connect(process.env.URLDB, (err,res) => {
    if (err) throw err;
    console.log('Base de datos ONLINE');
});



server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});