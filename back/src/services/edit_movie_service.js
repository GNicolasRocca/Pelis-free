const Movie = require("../models/Movie");

const edit_movie = async ({ id, title, poster, director, year, duration, genre, rate }) => {
    try {
        const edited = await Movie.findByIdAndUpdate(
            id,
            { title, poster, director, year, duration, genre, rate },
            { new: true }
        );

        if (!edited) {
            return null;
        }

        return edited;
    } catch (error) {
        console.log("Error al editar la película:", error.message);
        throw error;
    }
}

module.exports = { edit_movie };