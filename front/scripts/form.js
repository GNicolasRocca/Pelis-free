const URL = "http://localhost:3000/movies";

const create_movie_card = document.getElementById("create_movie_button");
const form = document.getElementById("form_creation_movies");
const clean_form = document.getElementById("clean_form");

clean_form.addEventListener("click", () => {
    form.reset();
});

// Validación de un campo y muestra un error
const validate_field = (value, error_id, input_id, message) => {
    const error_span = document.getElementById(error_id);
    const input = document.getElementById(input_id);
    
    if (!value || value.trim() === "") {
        error_span.textContent = message;
        input.classList.add("is-invalid");
        return false;
    }
    error_span.textContent = "";
    input.classList.remove("is-invalid");
    return true;
};

// Validaciones específicas de formato
const validate_year = (year) => {
    const error_span = document.getElementById("error_year");
    const input = document.getElementById("form_year");
    const year_regex = /^\d{4}$/; // exactamente 4 dígitos

    if (!year_regex.test(year) || year < 1888 || year > new Date().getFullYear()) {
        error_span.textContent = "El año debe ser un número válido (ej: 2001)";
        input.classList.add("is-invalid");
        return false;
    }
    error_span.textContent = "";
    input.classList.remove("is-invalid");
    return true;
};


// Validación de puntuación
const validate_rate = (rate) => {
    const error_span = document.getElementById("error_rate");
    const input = document.getElementById("form_rate");

    if (isNaN(rate) || rate < 0 || rate > 10) {
        error_span.textContent = "La puntuación debe ser un número entre 0 y 10";
        input.classList.add("is-invalid");
        return false;
    }
    error_span.textContent = "";
    input.classList.remove("is-invalid");
    return true;
};


// Validación de URL
const validate_url = (url) => {
    const error_span = document.getElementById("error_poster");
    const input = document.getElementById("form_poster");
    
    const url_regex = /^https?:\/\/.+\..+/;
    
    if (!url_regex.test(url)) {
        error_span.textContent = "El poster debe ser una URL válida (ej: https://...)";
        input.classList.add("is-invalid");
        return false;
    }
    error_span.textContent = "";
    input.classList.remove("is-invalid");
    return true;
};

create_movie_card.addEventListener("click",  async function form_handler(event){
    event.preventDefault();
    
    const form_title = document.getElementById("form_title").value.trim();
    const form_year = document.getElementById("form_year").value.trim();
    const form_director = document.getElementById("form_director").value.trim();
    const form_duration = document.getElementById("form_duration").value.trim();
    const form_genre = document.getElementById("form_genre").value.trim().split(",");
    const form_rate = document.getElementById("form_rate").value.trim();
    const form_poster = document.getElementById("form_poster").value.trim();

    const is_title_valid = validate_field(form_title, "error_title", "form_title", "El título es obligatorio");
    const is_director_valid = validate_field(form_director, "error_director", "form_director", "El director es obligatorio");
    const is_duration_valid = validate_field(form_duration, "error_duration", "form_duration", "La duración es obligatoria");
    const is_genre_valid = validate_field(form_genre.join(""), "error_genre", "form_genre", "El género es obligatorio");
    const is_year_valid = validate_year(form_year);
    const is_rate_valid = validate_rate(form_rate);
    const is_poster_valid = validate_url(form_poster);

    if (!is_title_valid || !is_director_valid || !is_duration_valid || 
    !is_genre_valid || !is_year_valid || !is_rate_valid || !is_poster_valid) {
        return; // corta la ejecución si hay algún error
    }
        
    const movie_data = {
        title: form_title,
        year: form_year,
        director: form_director,
        duration: form_duration,
        genre: form_genre,
        rate: form_rate,
        poster: form_poster
    };

    fetch(URL, {
        method: "POST",
        body: JSON.stringify(movie_data),  
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => {
            console.log("Respuesta:", response);
        }).catch((err) => {
            console.log("Error: ", err);
        }) 
    
    alert("¡Película agregada!");
});

