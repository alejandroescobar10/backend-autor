"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Writer_controller_1 = require("../controllers/Writer.controller");
const router = (0, express_1.Router)();
router.post("/", Writer_controller_1.createWriter); // Crear escritor
router.get("/", Writer_controller_1.getWriters); // Listar escritores
exports.default = router;
