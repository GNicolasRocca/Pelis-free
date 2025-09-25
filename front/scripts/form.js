const URL = "http://localhost:3000/movies";

const create_movie_card = document.getElementById("create_movie_card");
const form = document.getElementById("form_creation_movies");
const clean_hud = document.getElementById("clean_hud");

clean_hud.addEventListener("click", () => {
    form.reset();
});

create_movie_card.addEventListener("click",  async function form_handler(event){
    event.preventDefault();

    
    const form_title = document.getElementById("form_title").value;
    const form_year = document.getElementById("form_year").value;
    const form_director = document.getElementById("form_director").value;
    const form_duration = document.getElementById("form_duration").value;
    const form_genre = document.getElementById("form_genre").value.split(",");
    const form_rate = document.getElementById("form_rate").value;
    const form_poster = document.getElementById("form_poster").value;

    if(!form_title || !form_year || !form_director || !form_duration || !form_genre){
        return alert("Hay datos incompletos");
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

