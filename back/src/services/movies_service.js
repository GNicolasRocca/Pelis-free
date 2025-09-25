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

/*const movies_data = [
    {
        "title":"Guardians of the Galaxy Vol. 2",
        "year":2017,
        "director":"James Gunn",
        "duration":"2h 16min",
        "genre":["Action","Adventure","Comedy"],
        "rate":7.7,
        "poster":"https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
    },
    {
        "title":"Star Wars: Episode IV - A New Hope",
        "year":1977,
        "director":"George Lucas",
        "duration":"2h 1min",
        "genre":["Action","Adventure","Fantasy","Sci-Fi"],
        "rate":8.7,
        "poster":"https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg"
    },
    {
        "title":"The Lord of the Rings: The Fellowship of the Ring",
        "year":2001,
        "director":"Peter Jackson",
        "duration":"2h 58min",
        "genre": ["Action","Adventure","Drama","Fantasy"],
        "rate":8.8,
        "poster":"https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
    }
]
*/

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


module.exports = { get_movies, post_movies };