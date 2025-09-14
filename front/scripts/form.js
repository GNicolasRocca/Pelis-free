const create_movie_card = document.getElementById("create_movie_card");

create_movie_card.addEventListener("click", function form_handler(event){

    const form = document.getElementById("form_creation_movies");
    const form_title = document.getElementById("form_title").value;
    const form_year = document.getElementById("form_year").value;
    const form_director = document.getElementById("form_director").value;
    const form_duration = document.getElementById("form_duration").value;
    const form_genre = document.getElementById("form_genre").value;

    if(!form_title || !form_year || !form_director || !form_duration || !form_genre){
        return alert("Hay datos incompletos");
    } 
        
    addToHtml();

    //form.reset(); 
});
