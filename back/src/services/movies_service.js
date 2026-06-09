const Movie = require("../models/Movie")

class Movie_class{
  constructor({ title, poster, director, year, duration, genre, rate }) {
    if (!title || !poster || !director) {
        return "Faltan propiedades obligatorias: title, poster o director";
    }

    this.title = title;
    this.poster = poster;
    this.director = director;
    this.year = year || "Desconocido";
    this.duration = duration || "Desconocida";
    this.genre = genre || [];
    this.rate = rate || 0;
  }
}

const get_movies = async () => {
    try{
        const movies_db = await Movie.find();
        
        const movies = movies_db.map(movieData => new Movie_class(movieData));

        return movies;
    }
    catch(error){
        return [];
    }
}

const post_movies = async ({title, poster, director, year, duration, genre, rate}) => {
    try {
        const new_movie = await Movie.create({ title, poster, director, year, duration, genre, rate });
        return new_movie;
    }
    catch(error){
        console.log("Error al intentar agregar una película", error.message);
        throw error;
    }
}

// Esto en caso de extenderse mucho iría en otro archivo
const find_movie = async ({ title }) => { // Poner que puede que no llegue
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


module.exports = { get_movies, post_movies, find_movie };