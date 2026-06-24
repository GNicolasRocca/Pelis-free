const axios = require("axios");
const BASE_URL = "http://localhost:3000/movies";

// Pre-llena el formulario con los datos de la película
const movie_to_edit = JSON.parse(localStorage.getItem("movie_to_edit"));
console.log("Movie a editar:", movie_to_edit)


if (movie_to_edit) {
    document.getElementById("form_title").value = movie_to_edit.title;
    document.getElementById("form_year").value = movie_to_edit.year;
    document.getElementById("form_director").value = movie_to_edit.director;
    document.getElementById("form_duration").value = movie_to_edit.duration;
    document.getElementById("form_genre").value = movie_to_edit.genre.join(", ");
    document.getElementById("form_rate").value = movie_to_edit.rate;
    document.getElementById("form_poster").value = movie_to_edit.poster;
}

// Envía el PUT cuando el usuario confirma los cambios
const button_edit = document.getElementById("edit_movie_button");

button_edit.addEventListener("click", async (event) => {
    event.preventDefault();

    const movie_data = {
        title: document.getElementById("form_title").value.trim(),
        year: document.getElementById("form_year").value.trim(),
        director: document.getElementById("form_director").value.trim(),
        duration: document.getElementById("form_duration").value.trim(),
        genre: document.getElementById("form_genre").value.trim().split(","),
        rate: document.getElementById("form_rate").value.trim(),
        poster: document.getElementById("form_poster").value.trim()
    };

    try {
        await axios.put(`${BASE_URL}?id=${movie_to_edit.id}`, movie_data);
        alert("Película editada correctamente");
        localStorage.removeItem("movie_to_edit"); // limpia el localStorage
        window.location.href = "./mov_edit_form.html"; // redirige
    } catch(err) {
        console.log("Error:", err.response);
        alert("Error al editar la película");
    }
});