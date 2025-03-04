const userRepository = require("../repositories/user.repository")

const getUserById = async (id) => {

    try {
        const user = await userRepository.findUserById(id)

        if(!user){
            throw {
                status : 404,
                message : "User not found"
            }
        }
    
        return user; 
    } catch (error) {
        return error
    }
}