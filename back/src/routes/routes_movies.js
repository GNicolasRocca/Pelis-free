const express = require("express");
const {movies_controllers, movies_destructuring} = require("../controllers/movie_controllers");


const router = express.Router();

router.get("/movies", movies_controllers);
router.post("/movies", movies_destructuring);

module.exports = router;