"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router(); //Permite crear rutas 
router.get('/', (req, res) => {
    res.render('partials/index.hbs'); //Haciendo referencia a el index.hbs de la carpeta partials
});
router.get('/ta', (req, res) => {
    res.send('Receivede');
});
exports.default = router;
