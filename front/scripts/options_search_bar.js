const axios = require("axios");
const { movie_card, cards_box } = require("./cards_movies");

const URL = "http://localhost:3000/movies";

const select = document.querySelector(".form-select");

const render_movies = (movies) => {
    cards_box.innerHTML = "";
    movies.forEach(movie => {
        const card = movie_card(movie);
        cards_box.appendChild(card);
    });
};

select.addEventListener("change", async () => {
    console.log("hola")
})