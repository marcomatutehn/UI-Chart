var express = require('express');
var app = express();

//Servidor estatico para las vistas HTML que se utilizaron en este ejercicio
app.use(express.static("public"));

//Levantar el servidor y escuchar en el puerto indicado
const PORT = process.env.PORT ||3000;
app.listen(PORT, function (){
    console.log('App listening on port 3000!');
});
