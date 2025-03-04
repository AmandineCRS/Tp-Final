const userService = require("../services/user.service")

const getAllUsers = (request, response) => {
    response.status(200).json({message : "Hello"})
}

const getUser = async (request, response) => {
    try {
        const userId = request.params.id
        const result = await userService.getUserById(userId)  
        console.log(result)
        if("status" in result){
            throw result
        }

        response.status(200).json(result)

    } catch (error) {
        response.status(error.status).json({message : error.message})
    }


    
}

module.exports = {getAllUsers, getUser}