const User = require("../models/movie.model")

const findMovieById = async (id) => {
    const movie = await Movie.findByPk(id)

    return movie;
}

module.exports = {findMovieById}