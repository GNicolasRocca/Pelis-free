const { edit_movie } = require("../services/edit_movie_service");

const movie_edit = async (req, res) => {
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

module.exports = { movie_edit };