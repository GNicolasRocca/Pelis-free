const axios = require("axios");
const { get_movies, post_movies, find_movie } = require("../services/movies_service");

const movies_controllers = async (req, res) => {
    try {
        const movies_get = await get_movies();

        res.json(movies_get);
    } catch(error) {
        res.status(500).json({
            message: "Error al obtener las peliculas"
        })
    }
}

const movies_destructuring = async (req, res) => {
    try {
        const { title, poster, director, year, duration, genre, rate } = req.body;

        if (!title || !poster || !director || !year || !duration || !genre || !rate) {
            return (res.status(400).json({ message: "Falta algún dato para poder agregar la película" }));
        }

        const new_movie = await post_movies({title, poster, director, year, duration, genre, rate});

        return (
            res.status(201).json({
            message: "Película agregada correctamente",
            movie: new_movie
            })
        );
    } catch(error) {
        if (error.code === 11000) {
            return res.status(409).json({ message: "La película ya existe" });
        }
        return (res.status(500).json({ message: "Algo salió mal..." }));
    }
}

const movies_searching = async (req, res) => {
    try {
        // Paso todos los datos porque puede que haga busqueda con ellos tambien
        const { title, poster, director, year, duration, genre, rate } = req.query;

        if (!title) {
            return res.status(400).json({ message: "Ingresá un título para buscar" });
        }

        const found_movie = await find_movie(req.query);

        if (found_movie.length === 0) {
            return (res.status(404).json({ message: "No se encontraron películas" }));
        }

        return (res.status(200).json(found_movie));
    } catch(error) {
        return (res.status(500).json({ message: "Ocurrio un error" }));
    }
}

module.exports = { movies_controllers, movies_destructuring, movies_searching };
