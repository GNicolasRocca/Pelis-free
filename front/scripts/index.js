/*
const map_movies = tempData.map(movie => {
    const card = movie_card(movie);
    cards_box.appendChild(card);
});
*/

/*
Mi error por lo que me costo completa la lecture de Node, fue que no estaba exportando correctamente las variables
del modulo cards_movies pero con el destructuring en el require de aca abajo si puedo 
*/


const { movie_card, cards_box } = require("./cards_movies");

$.get("https://students-api.up.railway.app/movies", (data, status) => {
    const map_movies = data.map(movie => {
    const card = movie_card(movie);
    cards_box.appendChild(card);
    });
});

/*
const promise = axios.get("https://students-api.up.railway.app/movies");

promise
    .then((data) => {
        const map_movies = data.map(movie => {
        const card = movie_card(movie);
        cards_box.appendChild(card);
        });
    })
    .catch((err) => {
        console.log("hay un error");
        console.log(err);
    });
*/
