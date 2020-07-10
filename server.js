const express = require("express");
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');


const port = process.env.PORT || 8080;


app.use(express.static(__dirname + '/public')); // middleware

// Express HBS
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

// Helpers => enviado a helpers.js

// hbs.registerHelper('getAnio', () => {
//     return new Date().getFullYear();
// });
// hbs.registerHelper('nombreCompleto', () => {
//     return 'Hugo Rodriguez';
// });
// hbs.registerHelper('nombre', () => {
//     return 'Hugo';
// })



app.get("/", function(req, res) {

    res.render('home', {
        //nombre: 'Hugo',   
    }); // renderizar a home.hbs

});

app.get("/about", function(req, res) {

    res.render('about', {
        //nombre: 'Hugo',        

    }); // renderizar a home.hbs

});

// app.get("/", function(req, res) {
//     // res.send('Hello World !!');

//     let salida = {
//         nombre: "Hugo",
//         apellido: "Rodriguez Fracchia",
//         url: req.url,
//     };

//     res.send(salida);
// });

// app.get("/data", (req, res) => {
//     res.send("Probando el /data");
// });

app.listen(`${port}`, () => {
    console.log(`Escuchando peticiones del puerto ${port}`);
});