const Movie = require("../models/Movie");

// Esto en caso de extenderse mucho iría en otro archivo
const find_movie = async ({ title, director, genre }) => { // Poner que puede que no llegue, en caso de use mas parametros para la busqueda
    try {
        const query = title || director || genre; // toma el valor que llegue
        const clean = query.trim().replace(/\s+/g, "\\s*");
        const regex = new RegExp(clean, "i");

        const search_movie = await Movie.find({
            $or: [
                { title: { $regex: regex } },
                { director: { $regex: regex } },
                { genre: { $regex: regex } }
            ]
        });

        console.log("Resultados:", search_movie.length); // ← cuántas películas encontró
        return search_movie;

    } catch (error) {
        console.log("Error al intentar buscar la peli en la DB", error.message);
        throw { error: "Error al intentar buscar la peli en la DB" };
    }
}

module.exports = { find_movie };