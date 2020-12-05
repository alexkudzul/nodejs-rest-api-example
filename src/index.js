const express = require('express');
const app = express(); // ejecuta express

// Un middleware es una funcion que procesa datos antes de que el servidor lo reciba
const morgan = require('morgan');

// settings
// process.env.PORT -> Si existe un puerto definido por el servicio de la nube que lo tome o que use el 3000
app.set('port', process.env.PORT || 3000);
// Formatea el objeto json en el navegador
app.set('json spaces', 2);

// middlewares
// urlencode, convierte datos que llegue por el metodo post a json desde un frontend, extends: false
// json, permite al servidor recibir y entender objetos json
app.use(morgan('dev')); //combined
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes
app.use(require('./routes/index'));
app.use('/api/movies', require('./routes/movies'));
app.use('/api/users', require('./routes/users'));

// Starting server
// app escucha en el puerto 3000 y cuando inicie muestra un mensaje en consola
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});