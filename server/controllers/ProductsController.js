const Products = require("../database/models/Products");
const Sklads = require("../database/models/Sklad");

async function CreateProduct (req, res) {
    if (!req.body) return res.status(400).json("Нет данных");

    const { sklad, title, quantity } = req.body;

    const Sklad = await Sklads.findOne({
        where: {
            number: sklad
        }
    });

    if(!Sklad) return res.status(404).json("Склад не найден");

    const newProduct = await Products.create({
        sklad: sklad,
        title: title,
        quantity: quantity
    });

    if (!newProduct) return res.status(500).json("Не удалось создать продукт");

    return res.status(201).json(newProduct);
}

async function DeleteProduct(req, res){
    const product = await Products.findByPk(req.params.id);

    if(!product) return res.status(404).json("Продукт не найден");

    await product.destroy().then(()=> {
        return res.status(200).json("Продукт удален");
    }).catch(()=> {
        return res.status(500).json("Не удалось удалить продукт");
    });
}

async function EditProduct (req, res) {
    if(!req.body) return res.status(400).json("Нет данных");

    const product = await Products.findByPk(req.params.id);
    const { sklad, title, quantity } = req.body;

    if(!product) return res.status(404).json("Продукт не найден");

    product.sklad = sklad || product.sklad;
    product.title = title || product.title;
    product.quantity = quantity || product.quantity;

    await product.save().then(()=> {
        return res.status(200).json("Продукт изменен");
    }).catch(()=> {
        return res.status(500).json("Не удалось изменить продукт");
    });
}


module.exports = {
    CreateProduct,
    DeleteProduct,
    EditProduct
}