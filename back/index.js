const PORT = 3000;
const app = require("./server.js");
const router = require("./src/routes/routes_movies")
const dbConfig = require("./src/config/dbConfig.js");

dbConfig()
    .then(() => {
        app.listen(PORT, () => {
            console.log("Conectado en el puerto:", PORT);
        });
    })
    .catch(err => console.log("Error: ", err));


// Esto apenas iniciamos la aplciacion es asi porque nuestra pagina no funciona sin base datos, esto en 
// aplicaciones de la vida real tambien es asi

app.use(router);