const cards_box = document.getElementById("cards_box");

const movie_card = ({title, year, director, duration, genre, rate, poster}) => {
    const title_movie = document.createElement("h2");
    const year_movie = document.createElement("p");
    const director_movie = document.createElement("p");
    const duration_movie = document.createElement("p");
    const genre_movie = document.createElement("p");
    const rate_movie = document.createElement("h5");
    const poster_movie = document.createElement("img");
    
    title_movie.textContent = title;
    year_movie.textContent = "Año: " + year;
    director_movie.textContent = "Director: " + director;
    duration_movie.textContent = "Duración: " + duration;
    genre_movie.textContent = "Género: " + genre;
    rate_movie.textContent = "Calificación: " + rate;
    poster_movie.src = poster;

    title_movie.classList.add("elements_movies");
    year_movie.classList.add("elements_movies", "elements_hover");
    director_movie.classList.add("elements_movies", "elements_hover");
    duration_movie.classList.add("elements_movies", "elements_hover");
    genre_movie.classList.add("elements_movies", "elements_hover");
    rate_movie.classList.add("elements_movies", "elements_hover");
    poster_movie.id = "poster_movies";
    
    const cards_container = document.createElement("div");
    cards_container.classList.add("div_movies");

    cards_container.appendChild(title_movie);
    cards_container.appendChild(year_movie);
    cards_container.appendChild(director_movie);
    cards_container.appendChild(duration_movie);
    cards_container.appendChild(genre_movie);
    cards_container.appendChild(rate_movie);
    cards_container.appendChild(poster_movie);

    return cards_container;
};

module.exports = { movie_card, cards_box };
