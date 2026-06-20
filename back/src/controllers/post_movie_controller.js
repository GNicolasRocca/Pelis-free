const { post_movies } = require("../services/post_movies_service");

const movie_post = async (req, res) => {
    try {
        const { title, poster, director, year, duration, genre, rate } = req.body;

        if (!title || !poster || !director || !year || !duration || !genre || !rate) {
            return (res.status(400).json({ message: "Falta algún dato para poder agregar la película" }));
        }

        const new_movie = await post_movies({title, poster, director, year, duration, genre, rate});

        return (
            res.status(201).json({
            message: "Película agregada correctamente",
            movie: new_movie
            })
        );
    } catch(error) {
        if (error.code === 11000) {
            return res.status(409).json({ message: "La película ya existe" });
        }
        return (res.status(500).json({ message: "Algo salió mal..." }));
    }
}

module.exports = { movie_post };