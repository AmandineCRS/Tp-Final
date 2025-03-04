const movieService = require("../services/user.service")

const getAllMovies = (request, response) => {
    response.status(200).json({message : "Hello"})
}

const getMovie = async (request, response) => {
    try {
        const movieId = request.params.id
        const result = await userService.getMovieById(movieId)  
        console.log(result)
        if("status" in result){
            throw result
        }

        response.status(200).json(result)

    } catch (error) {
        response.status(error.status).json({message : error.message})
    }


    
}

module.exports = {getAllMovies, getMovie}