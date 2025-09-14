const PORT = 3000;
const app = require("./src/server");
const router = require("./src/routes/routes_movies")

app.use(router);

app.listen(PORT, () => {
    console.log("Conectado en el puerto:", PORT);
});

// Acordarse de que para poder ver las solicitudes tengo que darle npm start al back y solicitar la solicitud