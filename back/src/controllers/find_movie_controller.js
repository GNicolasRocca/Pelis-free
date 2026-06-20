const { find_movie } = require("../services/find_movie_service");

const movies_search = async (req, res) => {
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

module.exports = { movies_search };