const { find_movie } = require("../services/find_movie_service");

const movies_search = async (req, res) => {
    try {
        const { title, director, genre } = req.query;

        if (!title && !director && !genre) {
            return res.status(400).json({ message: "Ingresá un título, nombre del director o género para buscar" });
        }

        const found_movie = await find_movie(req.query);

        return (res.status(200).json(found_movie));
    } catch(error) {
        return (res.status(500).json({ message: "Ocurrio un error" }));
    }
}

module.exports = { movies_search };