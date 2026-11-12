/*
 * Laboratorio — Listado de personas
 * Archivo: src/routes/personaRoutes.js
 * Tu tarea (paso 8): asociar la URL "/" con el controlador.
 * Guía: README.md
 */

const express = require("express");
const { listarPersonas } = require("../controllers/personaController");

const router = express.Router();

// TODO (paso 8): registra la ruta GET / para que use listarPersonas.

router.get("/", listarPersonas);

module.exports = router;
