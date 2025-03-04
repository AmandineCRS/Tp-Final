const express = require("express");
const movieController = require("../controllers/movie.controller")
const router = express.Router();

router.get("/", movieController.getAllMovies)
router.get("/:id", movieController.getMovie)
router.get("/:title", movieController.getMovie)
router.get("/:description", movieController.getMovie)
router.get("/:releaseDate", movieController.getMovie)
router.get("/:imageUrl", movieController.getMovie)


module.exports = router;