// Ver como hago esto si vamos a introducir todo lo de movie_controllers a este modulo o como lo hago preguntar profe

/*
const axios = require("axios");

const movies_services = async (req, res) => {
    try{
        const response = await axios.get("https://students-api.up.railway.app/movies");
        res.json(response.data);
    }
    catch (error){
        res.status(500).json({
            error: "Error al obtener las peliculas"
        })
    }
    
}

module.exports = movies_services;
*/