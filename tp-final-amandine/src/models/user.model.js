const { DataTypes } = require("sequelize")
const sequelize = require("../config/db")


const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING(),
        allowNull: false,
    },
}, {
    tableName: "users"
})

const hash = await bcrypt.hash(password,10)

module.exports = User;