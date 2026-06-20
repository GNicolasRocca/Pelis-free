const axios = require("axios");
const { movie_card, cards_box } = require("./cards_movies");
const search_input = document.getElementById("search_input");
const delete_button = document.getElementById("delete_button");

const BASE_URL = "http://localhost:3000/movies";

const fetch_all_movies = async () => {
    try {
        const response = await axios.get(BASE_URL);
        cards_box.innerHTML = "";
        response.data.forEach(movie => {
            const card = movie_card(movie);
            cards_box.appendChild(card);
        });
    } catch(err) {
        console.log("Error al cargar películas:", err);
    }
};

delete_button.addEventListener("click", async (event) => {
    event.preventDefault();

    const title = search_input.value.trim();
    
    if (!title) {
        alert("Ingresá el título de la película a eliminar");
        return;
    }

    const confirm_delete = confirm(`¿Estás seguro que querés eliminar "${title}"?`);
    if (!confirm_delete) return;

    try {
        await axios.delete(`http://localhost:3000/movies?title=${title}`);
        alert("Película eliminada correctamente");
        search_input.value = "";
        fetch_all_movies();
    } catch (error) {
        console.log("Error completo:", error.response); 
        if (error.response?.status === 404) {
            alert("No se encontró la película");
        } else {
            alert("Error al eliminar la película");
        }
    }
});