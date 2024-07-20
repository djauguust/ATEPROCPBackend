const express = require("express");
const router = express.Router();

const usuariosController = require("../controllers/usuarioController");
const tokenController = require("../controllers/tokenController")

//POST
router.post("/usuarios/", usuariosController.register);
router.post("/login/", usuariosController.login);

//GET
router.get("/usuarios/",tokenController.validateToken, usuariosController.getAllUsers);
router.get("/usuarios/:id",tokenController.validateToken, usuariosController.getUserById);

//PUT
router.put("/usuarios/:id",tokenController.validateToken, usuariosController.updateUser);
router.put("/contrasenia/:id",tokenController.validateToken, usuariosController.updatePassword);
router.put("/reset/:id",/* tokenController.validateToken, */ usuariosController.resetPassword);
router.put("/force/:id",/* tokenController.validateToken, */ usuariosController.forceChangePassword);

//DELETE
router.delete("/usuarios/:id",tokenController.validateToken, usuariosController.deleteUser);

module.exports = router;