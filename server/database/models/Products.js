const sequelize = require("../DatabaseConfig");
const { DataTypes } = require("sequelize");

const Product = sequelize.define("Product", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    sklad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
});

module.exports = Product;