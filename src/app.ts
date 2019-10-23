//Inicia el servidor

import express from 'express'
import morgan from 'morgan'
import exphbs from 'express-handlebars'
import path from 'path'

//Rutas
import indexRoutes from './routes/index'
import tasksRoutes from './routes/tasks'

class Application{
    app: express.Application;
    
    constructor(){
        this.app= express();
        this.settings()
        this.middlewares()
        this.routes()
    }

    settings(){ //Configurar funciones del servidor
        this.app.set('port', 3000)
        this.app.set('views', path.join(__dirname, 'views'))
        this.app.engine('.hbs', exphbs({
            layoutsDir: path.join(this.app.get('views'), 'layouts'), //Las carpetas layouts sirven para especificar codigo en comun de todas las plantillas
            partialsDir: path.join(this.app.get('views'), 'partials'), //Importar algunos pedazos de html que despues se podran importar
            defaultLayout: 'main',
            extname: '.hbs'
        }))
        this.app.set('view engine', '.hbs')
    }

    middlewares(){
        this.app.use(morgan('dev')) 

        //Soportar cualquier envio de datos al servidor
        this.app.use(express.json()) //Entender fortos json
        this.app.use(express.urlencoded({extended: false}))
    }

    routes(){
        this.app.use(indexRoutes) //Utiliza las rutas de indexRoutes definidas arriba
        this.app.use('/tasks',tasksRoutes) //No es necesario, se podrian escribir todas las rutas en el mismo file
        this.app.use(express.static(path.join(__dirname, 'public'))) //El servidor podra leer la carpeta pulic desde el navegador
    }

    start(){
        this.app.listen(this.app.get('port'), ()=>{
            console.log('Server running on port 3000');
        });
    }

}

export default Application;