const axios = require("axios");
const { get_movies } = require("../services/get_movies_service");


const get_all_movies = async (req, res) => {
    try {
        const movies_get = await get_movies();

        res.json(movies_get);
    } catch(error) {
        res.status(500).json({
            message: "Error al obtener las peliculas"
        })
    }
}

module.exports = { get_all_movies };
