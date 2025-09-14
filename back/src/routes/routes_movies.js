const express = require("express");
const movies_controllers = require("../controllers/movie_controllers")

const router = express.Router();

router.get("/movies", movies_controllers);

module.exports = router;