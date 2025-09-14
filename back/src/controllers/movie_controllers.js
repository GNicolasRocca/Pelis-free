const axios = require("axios");

class Movie {
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


const movies_controllers = async (req, res) => {
    try{
        const response = await axios.get("https://students-api.up.railway.app/movies");
         const movies = response.data.map(movieData => new Movie(movieData));

        res.json(response.data);
    }
    catch (error){
        res.status(500).json({
            error: "Error al obtener las peliculas"
        })
    }
    
}

module.exports = movies_controllers;
