"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
//Trabajar con los datos
const TaskSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
        lowercase: true,
    },
    description: {
        type: String,
        required: false,
        lowercase: true
    }
});
exports.default = mongoose_1.model('Task', TaskSchema);
