const Registros = require("../models/registros.model");

//POST

const createRegister = async (req, res) => {
  try {
    const { nombre, dni, telefono, sexo, esAfiliado, consulta, usuarioId } =
      req.body;

    /* TO DO Ver que el usuario exista */

    const registro = new Registros({
      nombre,
      dni,
      telefono,
      sexo,
      esAfiliado,
      consulta,
      usuarioId,
    });
    await registro.save();
    res.status(201).json({ message: "¡Registro Creado!" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//GET

const getAllRegister = async (req, res) => {
  try {
    const allRegisters = await Registros.find();

    res.status(200).json(allRegisters);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//UPDATE
const updateRegister = async (req, res) => {
  try {
    const code = req.params.code;
    const productos = await Registros.find();
    const producto = productos.find((e) => e.code == code);
    if (producto) {
      producto.code = req.body.code || producto.code;
      producto.description = req.body.description || producto.description;
      if (req.body.isCantidad) {
        producto.isCantidad = true;
      } else {
        producto.isCantidad = false;
      }
      await producto.save();
      res.status(200).json({ message: "Producto actualizado" });
    } else {
      res.status(404).json({ error: "Producto no encontrado" });
    }
  } catch (error) {
    console.log(error);
  }
};

//DELETE
const deleteRegister = async (req, res) => {
  try {
    const code = req.params.code;
    const productos = await Registros.find();
    const producto = productos.find((e) => e.code == code);
    if (producto) {
      await Registros.findOneAndDelete({ code: code });
      res.status(200).json({ message: "Producto eliminado" });
    } else {
      res.status(404).json({ error: "Producto no encontrado" });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: "Producto no encontrado" });
  }
};

module.exports = {
  createRegister,
  getAllRegister,
  updateRegister,
  deleteRegister,
};
