const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
    host: "localhost",
    username: "postgres",
    password: "postgres",
    database: "Chumakov",
    logging: false
});

module.exports = sequelize;