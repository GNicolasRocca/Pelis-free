const axios = require("axios");
const { get_movies, post_movies, find_movie, delete_movie, edit_movie } = require("../services/movies_service");

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

        return (res.status(200).json(found_movie));
    } catch(error) {
        return (res.status(500).json({ message: "Ocurrio un error" }));
    }
}

const movies_delete = async (req, res) => {
    try {
        // Lo mismo que en movies_searching, puede que a futuro la busqueda se hago con otro tipo de dato
        const { title } = req.query;

        if (!title) {
            return (res.status(400).json({ message: "Ingresá un título para buscar" }));
        }

        const del_movie = await delete_movie({ title });

        if (!del_movie) {
            return res.status(404).json({ message: "No se encontró la película" });
        }

        return (res.status(200).json({ message: "Película eliminada correctamente" }));
    } catch (error) {
        return (res.status(500).json({ message: "Ocurrió un error" }));
    }
}

const movies_edit = async (req, res) => {
    try {
        const { id } = req.query;
         console.log("ID recibido:", id);
        const { title, poster, director, year, duration, genre, rate } = req.body;
        console.log("Body recibido:", req.body);

        const ed_movie = await edit_movie({ id, title, poster, director, year, duration, genre, rate });

        if (!ed_movie) {
            return res.status(404).json({ message: "No se encontró la película" });
        }

        return (res.status(200).json({
            message: "Película editada correctamente",
            movie: ed_movie
        }));
    } catch (error) {
        return (res.status(500).json({ message: "Ocurrió un error" }));
    }
}

module.exports = { movies_controllers, movies_destructuring, movies_searching, movies_delete, movies_edit };
