const sequelize = require("../DatabaseConfig");
const { DataTypes } = require("sequelize");

const Sklad = sequelize.define("Sklad", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    number: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },

    address: {
        type: DataTypes.STRING,
        allowNull: false
    },

});

module.exports = Sklad;