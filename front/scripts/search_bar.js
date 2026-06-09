const axios = require("axios");
const { movie_card, cards_box } = require("./cards_movies");

const URL = "http://localhost:3000/movies";

const search_input = document.getElementById("search_input");

const render_movies = (movies) => {
    cards_box.innerHTML = "";
    movies.forEach(movie => {
        const card = movie_card(movie);
        cards_box.appendChild(card);
    });
};

// Busca cuando escribe más fluido
search_input.addEventListener("input", async () => {
    const title = search_input.value.trim();

    if (!title) {
        // Si borra todo, vuelve a mostrar todas
        const response = await axios.get(URL);
        render_movies(response.data);
        return;
    }

    try {
        const response = await axios.get(`${URL}/search?title=${title}`);

        render_movies(response.data);
    } catch(err) {
        if (err.response?.status === 404) {
            cards_box.innerHTML = "<p style='color:white'>No se encontraron películas</p>";
        }
    }
});
