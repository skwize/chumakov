const express = require("express");
const controller = require("../controllers/ProductsController");

const router = express.Router();

router.post("/products/create", controller.CreateProduct);
router.delete("/products/delete/:id", controller.DeleteProduct);
router.patch("/products/edit/:id", controller.EditProduct);

module.exports = router;