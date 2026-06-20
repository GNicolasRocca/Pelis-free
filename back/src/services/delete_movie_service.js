// Poner la funcion y fijarse si cambia algo que le ponga .service
const Movie = require("../models/Movie");

const delete_movie = async ({ title }) => {
    try {
        const deleted = await Movie.findOneAndDelete({ title: title });
        if (!deleted) {
            return null;
        }
        
        return deleted;
    } catch (error) {
        console.log("Error al eliminar la película:", error.message);
        throw error;
    }
}

module.exports = { delete_movie };