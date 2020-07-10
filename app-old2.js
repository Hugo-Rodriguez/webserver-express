const express = require('express');

const app = express();

app.get('/', function(req, res) {
    res.send(`Hola Mundo -- puerto ${port}`);
});


app.get('/data', function(req, res) {
    res.send(`Hola Data -- puerto ${port}`);
});

let port= 3000;

app.listen( port, () => {
    console.log(`Escuchando peticiones en el puerto: ${port}`) ;
});
