const express = require("express");
const { movies_controllers, movies_destructuring, movies_searching } = require("../controllers/movie_controllers");


const router = express.Router();

router.get("/movies", movies_controllers);
router.post("/movies", movies_destructuring);
router.get("/movies/search", movies_searching);

module.exports = router;