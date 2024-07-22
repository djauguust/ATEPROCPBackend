const mongoose = require("mongoose");

const registroSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  dni: {
    type: String,
    required: true,
  },
  telefono: {
    type: String,
    required: true,
  },
  sexo: {
    type: String,
    enum: ["masculino", "femenino", "otro"],
    required: true,
  },
  esAfiliado: {
    type: Boolean,
    required: true,
  },
  consulta: {
    type: String,
    required: true,
  },
  fechaHoraConsulta: {
    type: Date,
    default: Date.now,
    required: true,
  },
  usuarioId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "usuariosATEP",
    required: true,
  },
});

const RegistroModel = mongoose.model("registros", registroSchema);

module.exports = RegistroModel;
