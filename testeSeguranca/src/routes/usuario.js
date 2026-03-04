const express = require('express');
const routerUser = express.Router();

const {createUser} = require("../controller/usuarioController.js")

routerUser.post("/usuario", createUser)

module.exports = routerUser;