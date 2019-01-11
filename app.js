var express = require('express');
var app = express();

app.use(express.static("public"));

//Levantar el servidor y escuchar en el puerto indicado
const PORT = process.env.PORT ||3000;
app.listen(PORT, function (){
    console.log('App listening on port 3000!');
});
