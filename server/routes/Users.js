const express = require("express");
const controller = require("../controllers/UsersController");

const router = express.Router();

router.post("/users/create", controller.CreateUser);

module.exports = router;