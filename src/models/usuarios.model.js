const mongoose = require("mongoose");
const { Schema } = mongoose;

const usuarioModel = new Schema(
  {
    nombre: {
      type: String,
      required: true,
      max: 100,
      min: 3,
      trim: true,
    },
    apellido: {
      type: String,
      required: true,
      max: 100,
      min: 3,
      trim: true,
    },
    username: {
      type: String,
      unique: true,
      required: true,
      max: 100,
      min: 5,
      trim: true,
    },
    contrasenia: {
      type: String,
      max: 100,
      min: 5,
      trim: true,
    },
    esActivo: {
      type: Boolean,
      required: true,
    },
    renovarContrasenia: {
      type: Boolean,
      required: true,
    },
    esAdmin: {
      type: Number,
      required: true,
      min: 0,
      max: 4,
    },
  },
  { versionKey: false }
);

const UsuarioModel = mongoose.model("usuariosATEP", usuarioModel); // crea la colección en la db

module.exports = UsuarioModel;