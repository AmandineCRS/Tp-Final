const movieRepository = require("../repositories/movie.repository")

const getMovieById = async (id) => {

    try {
        const movie = await movieRepository.findMovieById(id)

        if(!movie){
            throw {
                status : 404,
                message : "Movie not found"
            }
        }
    
        return movie; 
    } catch (error) {
        return error
    }
}