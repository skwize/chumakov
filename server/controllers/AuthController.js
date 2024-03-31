const Users = require("../database/models/User");


async function SignIn (req, res) {
    if (!req.body) return res.status(400).json("Нет данных");

    const { username, password } = req.body;

    const candidate = await Users.findOne({
        where: {
            username: username
        }
    });

    if (!candidate) return res.status(404).json("Пользователь не найден");

    if(candidate.password == password) {
        return res.status(200).json("Авторизация успешна");
    }

    return res.status(500).json("Внутренняя ошибка сервера");
}

module.exports = {
    SignIn
}