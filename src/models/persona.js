/*
 * Laboratorio — Listado de personas
 * Archivo: src/models/persona.js
 * Tu tarea (paso 6): describir el documento Persona y exportar el modelo.
 * La colección en MongoDB se llama personas.
 * Guía: README.md
 */

const mongoose = require("mongoose");

// TODO (paso 6): crea personaSchema con nombre, apellido, edad y correo.
// Exporta mongoose.model("Persona", personaSchema) y borra el objeto de abajo.

const personaSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    apellido: {
      type: String,
      required: true,
      trim: true,
    },
    edad: {
      type: Number,
      required: true,
      min: 0,
    },
    correo: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
  },
  {
    collection: "personas",
  }
);

module.exports = mongoose.model("Persona", personaSchema);