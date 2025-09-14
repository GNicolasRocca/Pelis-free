const axios = require("axios");

const movies_controllers = async (req, res) => {
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

module.exports = movies_controllers;
