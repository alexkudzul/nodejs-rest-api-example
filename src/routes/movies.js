const { Router } = require('express');
const router = Router();

// Provee funciones(obtener un nuevo array, eliminar etc) para poder procesar datos o un array
const _ = require('underscore');

const movies = require('../exampleDB.json');
console.log(movies);

router.get('/', (req, res) => {

    // Devuelve el json
    res.json(movies);
});

router.post('/', (req, res) => {
    // Obtiene los datos
    const {title, director, year, rating} = req.body;

    // Comprueba que esten todo los datos
    if(title && director && year && rating){
        // Genera un id dinamico segun la longitud del objeto
        const _id = movies.length + 1;
        // Crea una nueva pelicula
        const newMovie = {...req.body, _id};

        movies.push(newMovie);
        // Devuelve el json actualizado
        res.json(movies);
    }else{
        res.status(500).json({error: 'Error'});
    }
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, director, year, rating } = req.body;

    if(title && director && year && rating){
        _.each(movies, (movie, i) => {
            if(movie.id == id){
                movie.title = title;
                movie.director = director;
                movie.year = year;
                movie.rating = rating;
            }
        });

        // Devuelve el json actualizado
        res.json(movies);
    }else{
        res.status(500).json({error: 'Error'});
    }
});

router.delete('/:id', (req, res) => {

    // Guardamos el id que viene por parametro
    const { id } = req.params;

    // Recorre todo los movies, obtiene una movie y un indice cada vez que se recorra
    _.each(movies, (movie, i) => {
        // Si el id de movie es igual al id que se recibe por parametro
        if(movie.id == id){
            // con el indice i, que se esta recorriendo y que remueva solo 1 movie
            movies.splice(i, 1);
        }
    });
    // Devuelve el json actualizado
    res.send(movies);
});


module.exports = router;