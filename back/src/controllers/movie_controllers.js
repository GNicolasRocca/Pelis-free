const axios = require("axios");
const { get_movies, post_movies } = require("../services/movies_service");

const movies_controllers = async (req, res) => {
    try{
        const movies_get = await get_movies();

        res.json(movies_get);
    } catch(error){
        res.status(500).json({
            error: "Error al obtener las peliculas"
        })
    }
}

const movies_destructuring = async (req, res) => {
    try{
        const { title, poster, director, year, duration, genre, rate } = req.body;
        console.log("Body", req.body);
        const new_movie = await post_movies({title, poster, director, year, duration, genre, rate});

        res.status(201).json({
            mensaje: "Pelicula agregada correctamente",
            movie: new_movie // Esto no lo pide la homework
        })
    } catch(error){
        res.status(500).json({mensaje: "Algo salió mal..."}) //Despues cambiar el status del error
    }
}

module.exports = {movies_controllers, movies_destructuring};
