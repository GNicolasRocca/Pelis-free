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

module.exports = { get_movies };