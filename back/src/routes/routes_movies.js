const express = require("express");
const { get_all_movies } = require("../controllers/get_movies_controller");
const { movie_post } = require("../controllers/post_movie_controller");
const { movies_search } = require("../controllers/find_movie_controller");
const { movie_delete } = require("../controllers/delete_movie_controller");
const { movie_edit } = require("../controllers/edit_movie_controller");

const router = express.Router();

router.get("/movies", get_all_movies);
router.post("/movies", movie_post);
router.get("/movies/search", movies_search);
router.delete("/movies", movie_delete);
router.put("/movies", movie_edit);

module.exports = router;