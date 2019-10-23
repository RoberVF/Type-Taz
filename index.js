"use strict";
//Pagina principal en la que se llaman a los modulos
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const database_1 = __importDefault(require("./database"));
//Start the server
database_1.default();
const app = new app_1.default();
app.start();
