const Movie = require("../models/Movie");

// Esto en caso de extenderse mucho iría en otro archivo
const find_movie = async ({ title }) => { // Poner que puede que no llegue, en caso de use mas parametros para la busqueda
    try {
        const title_clean = title.trim().replace(/\s+/g, "\\s*");
        const regex = new RegExp(title_clean, "i"); // "i" = case insensitive
        const search_movie = await Movie.find({ title: { $regex: regex } }); // find en vez de findOne para traer varios resultados

        return search_movie;
        
    } catch (error) {
        console.log("Error al intentar buscar la peli en la DB", error.message);
        throw { error: "Error al intentar buscar la peli en la DB" };
    }
}

module.exports = { find_movie };