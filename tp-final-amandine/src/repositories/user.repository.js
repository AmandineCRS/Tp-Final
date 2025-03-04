const User = require("../models/user.model")

const findUserById = async (id) => {
    const user = await User.findByPk(id)

    return user;
}

module.exports = {findUserById}