const { delete_movie } = require("../services/delete_movie_service");

const movie_delete = async (req, res) => {
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

module.exports = { movie_delete };