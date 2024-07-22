const express = require("express");
const router = express.Router();

const registroController = require("../controllers/registroController");
/* const tokenController = require("../controllers/tokenController") */

//POST
router.post("/registros/", registroController.createRegister);


//GET
router.get("/registros/"/* ,tokenController.validateToken */, registroController.getAllRegister);
/* router.get("/usuarios/:id",tokenController.validateToken, registroController.getUserById); */

//PUT
//router.put("/usuarios/:id",tokenController.validateToken, registroController.updateUser);
//router.put("/contrasenia/:id",tokenController.validateToken, registroController.updatePassword);
//router.put("/reset/:id",/* tokenController.validateToken, */ registroController.resetPassword);
//router.put("/force/:id",/* tokenController.validateToken, */ registroController.forceChangePassword);

//DELETE
/* router.delete("/usuarios/:id",tokenController.validateToken, registroController.deleteUser); */

module.exports = router;