const express = require('express');
const app = express();
var listaF = new Array();
var listaM = new Array();

function cargarAct(req, res){
  res.render('formulario/cargarAct', {
     listaF: listaF,
     listaM: listaM
  });
}

app.get('/cargarAct',(req,res)=>{
  var actividad = req.query.actividad;
  var genero = req.query.genero;
  const arrayGen = ["femenino", "masculino"]
  const arrayAct = {
    "actividad":[
      {nombre: "Ninguna", cantidad:  0},
      {nombre: "Barrer", cantidad: 0},
      {nombre: "Lavar los platos", cantidad: 0},
      {nombre: "Cocinar", cantidad: 0},
      {nombre: "Planchar", cantidad: 0},
      {nombre: "Ir al super", cantidad: 0},
      {nombre: "Lavar la ropa", cantidad: 0},
    ]
  }

  if(arrayGen[0] === genero){
   for( i = 0; i < arrayAct["actividad"].length; i++ ){
     var act = arrayAct["actividad"][i].nombre;
     if(act === actividad){
      listaF.push({
        actividad: act,
        genero: genero
      })
     }
   }
  }else{
   listaM.push({
     actividad: actividad,
     genero: genero
   })
  }

  console.log(listaF);
  console.log("***");
  console.log(listaM);

});


app.post( '/cargarAct',(req, res)=>{
  var actividad = req.body.actividad;
  var genero = req.body.genero;
  const arrayGen = ["femenino", "masculino"]
  const arrayAct = {
    "actividad":[
      {nombre: "Ninguna", cantidad:  0},
      {nombre: "Barrer", cantidad: 0},
      {nombre: "Lavar los platos", cantidad: 0},
      {nombre: "Cocinar", cantidad: 0},
      {nombre: "Planchar", cantidad: 0},
      {nombre: "Ir al super", cantidad: 0},
      {nombre: "Lavar la ropa", cantidad: 0},
    ]
  }

  if(arrayGen[0] === genero){
   for( i = 0; i < arrayAct["actividad"].length; i++ ){
     var act = arrayAct["actividad"][i].nombre;
     if(act === actividad){
      listaF.push({
        actividad: act,
        genero: genero
      })
     }
   }
  }else{
   listaM.push({
     actividad: actividad,
     genero: genero
   })
  }

  console.log(listaF);
  console.log("***");
  console.log(listaM);


});

// app.put('/formulario',(req,res)=>{

// });


module.exports = app;