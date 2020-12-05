const { Router } = require('express');
const router = Router();
// Permite hacer peticiones  get, posts, put, delete etc a otros servicios
const fetch = require('node-fetch');

// Fecth es una peticion asincrona e indica que tomara tiempo para obtener los datos por lo que se utiliza Async Await(espera)
router.get('/', async (req, res) => {
    // Se obtiene los datos de forma de string
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    // Convierte los datos a json
    const users = await response.json();
    // Devuelve el json actualizado
    res.json(users);
});

module.exports = router;