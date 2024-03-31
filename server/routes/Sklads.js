const express = require("express");
const controller = require("../controllers/SkladController");

const router = express.Router();

router.post("/sklads/create", controller.CreateSklad);
router.delete("/sklads/delete/:id", controller.DeleteSklad);

module.exports = router;
