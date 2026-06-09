const mongoose = require("mongoose");
require("dotenv").config();

const dbConfig = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Conectado a MongoDB Atlas");
    } catch(error){
        console.log("Error al conectar a MongoDB");
    }
}

module.exports = dbConfig;