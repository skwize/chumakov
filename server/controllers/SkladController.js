const Sklads = require("../database/models/Sklad");


async function CreateSklad (req, res) {
    if(!req.body) return res.status(400).json("Нет данных");

    const { number, address } = req.body;

    const newSklad = await Sklads.create({
        number: number,
        address: address
    });

    if(!newSklad) return res.status(500).json("не удалось создать склад");

    return res.status(201).json(newSklad);
}

async function DeleteSklad (req, res) {
    const candidate = await Sklads.findByPk(req.params.id);

    if(!candidate) return res.status(404).json("Склад не найден");

    await candidate.destroy().then(()=> {
        return res.status(200).json("Склад удален");
    }).catch(()=> {
        return res.status(500).json("Не удалось удалить склад");
    });
}


module.exports = {
    CreateSklad,
    DeleteSklad
}