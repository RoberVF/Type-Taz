"use strict";
//Inicia el servidor
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const express_handlebars_1 = __importDefault(require("express-handlebars"));
const path_1 = __importDefault(require("path"));
//Rutas
const index_1 = __importDefault(require("./routes/index"));
const tasks_1 = __importDefault(require("./routes/tasks"));
class Application {
    constructor() {
        this.app = express_1.default();
        this.settings();
        this.middlewares();
        this.routes();
    }
    settings() {
        this.app.set('port', 3000);
        this.app.set('views', path_1.default.join(__dirname, 'views'));
        this.app.engine('.hbs', express_handlebars_1.default({
            layoutsDir: path_1.default.join(this.app.get('views'), 'layouts'),
            partialsDir: path_1.default.join(this.app.get('views'), 'partials'),
            defaultLayout: 'main',
            extname: '.hbs'
        }));
        this.app.set('view engine', '.hbs');
    }
    middlewares() {
        this.app.use(morgan_1.default('dev'));
        //Soportar cualquier envio de datos al servidor
        this.app.use(express_1.default.json()); //Entender fortos json
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use(index_1.default); //Utiliza las rutas de indexRoutes definidas arriba
        this.app.use('/tasks', tasks_1.default); //No es necesario, se podrian escribir todas las rutas en el mismo file
        this.app.use(express_1.default.static(path_1.default.join(__dirname, 'public'))); //El servidor podra leer la carpeta pulic desde el navegador
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server running on port 3000');
        });
    }
}
exports.default = Application;
