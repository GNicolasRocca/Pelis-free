const Movie = require("../models/Movie");

const post_movies = async ({ title, poster, director, year, duration, genre, rate }) => {
    try {
        const new_movie = await Movie.create({ title, poster, director, year, duration, genre, rate });
        return new_movie;
    }
    catch(error){
        console.log("Error al intentar agregar una película", error.message);
        throw error;
    }
}

module.exports = { post_movies };