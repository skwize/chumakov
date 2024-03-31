const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sequelize = require("./database/DatabaseConfig");

const ProductsModel = require("./database/models/Products");
const SkladModel = require("./database/models/Sklad");
const UsersModel = require("./database/models/User");

const UsersRoutes = require('./routes/Users');
const AuthRoutes = require("./routes/Auth");
const SkladRoutes = require("./routes/Sklads");
const ProductsRoutes = require("./routes/Products");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use((req, res, next)=> {
    res.header({
        "Access-Control-Allow-Origin": "*"
    });
});

async function SyncDbModels () {
    await ProductsModel.sync({alter: true});
    await SkladModel.sync({alter: true});
    await UsersModel.sync({alter: true});
    console.log("All models sync'ed");
}

async function DB_Connect () {
    await sequelize.authenticate();
    console.log("Database is configured");
}

app.use(UsersRoutes);
app.use(AuthRoutes);
app.use(SkladRoutes);
app.use(ProductsRoutes);

app.listen(3001, ()=> {
    console.log("Сервер запущен на порту: 3001");
});

DB_Connect();
SyncDbModels();