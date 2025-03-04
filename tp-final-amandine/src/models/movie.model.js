const { DataTypes } = require("sequelize")
const sequelize = require("../config/db")


const Movie = sequelize.define("Movie", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING(),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(),
        allowNull: false,
    },
    releaseDate: {
        type: DataTypes.STRING(),
        allowNull: false,
    },
    imageUrl: {
        type: DataTypes.STRING(),
        allowNull: true,
    },
}, {
    tableName: "movies"
})



module.exports = Movie;