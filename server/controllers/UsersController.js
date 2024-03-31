const Users = require("../database/models/User");


async function CreateUser (req, res) {
    if (!req.body) return res.status.json("Нет данных");

    const { username, password } = req.body;

    const User = await Users.create({
        username: username,
        password: password
    });

    if (!User) {
        return res.status(500).json("Не удалось создать пользователя");
    }

    return res.status(201).json("Пользователь создан");
};


module.exports = {CreateUser};
