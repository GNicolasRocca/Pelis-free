const mongoose = require("mongoose");
require("dotenv").config();

const dbConfig = async () => {
    try{
        await mongoose.connect(process.env.URL);
        console.log("Conectado a mongoDB Atlas");
    } catch(error){
        console.log("Error al conectar a mongoDB");
    }
}

module.exports = dbConfig;