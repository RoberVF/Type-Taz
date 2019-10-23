"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
//Model
const Task_1 = __importDefault(require("../models/Task"));
//En las rutas del archivo app.ts le especificas que todas las rutas escritas en este file, llevaran de prefijo /tasks
router.route('/create')
    .get((req, res) => {
    res.render('tasks/create');
})
    .post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description } = req.body;
    const newTask = new Task_1.default({ title, description });
    yield newTask.save();
    res.redirect('/tasks/list'); //Redirecciona a la pagina /tasks/list tras crear la tarea
}));
router.route('/list')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tasks = yield Task_1.default.find();
    res.render('tasks/list', { tasks: tasks });
}));
router.route('/delete/:id')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; // En req.params se encuentra el id del elemento
    yield Task_1.default.findByIdAndDelete(id); //Asi se elimina el id ya que esta almacenado en la constante {id}
    res.redirect('/tasks/list');
}));
router.route('/edit/:id')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const task = yield Task_1.default.findById(id); //Igual que con delete, pero aqui solo buscas, en delete buscas y eliminas
    console.log(task);
    res.render('tasks/edit', { task: task });
}))
    .post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { title, description } = req.body;
    yield Task_1.default.findByIdAndUpdate(id, { title, description }); //id-> Dato a actualizar. Lista-> Lo que se quiere actualizar de ese dato
    res.redirect('/tasks/list');
}));
exports.default = router;
