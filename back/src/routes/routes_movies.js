const express = require("express");
const { movies_controllers, movies_destructuring, movies_searching, movies_delete, movies_edit } = require("../controllers/movie_controllers");


const router = express.Router();

router.get("/movies", movies_controllers);
router.post("/movies", movies_destructuring);
router.get("/movies/search", movies_searching);
router.delete("/movies", movies_delete);
router.put("/movies", movies_edit);

module.exports = router;