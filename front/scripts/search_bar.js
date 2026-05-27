const search_input = document.getElementById("search_input");
const movies = document.querySelectorAll(".elements_movies");

search_input.addEventListener("input", () => {
  const query = search_input.value.toLowerCase();

  movies.forEach(movie => {
    const title = movie.textContent.toLowerCase();
    if(title.includes(query)) {
      movie.classList.remove("hidden");
    } else{
      movie.classList.add("hidden");
    }
  });
});
