//Conexion a la database

import mongoose from 'mongoose' 

async function connect(){
    try{
        await mongoose.connect('mongodb://localhost/ts-app-tutorial', {
            //Evitar mensajes de error internos porr consola. Esto no afecta al funcionamiento del programa
            useNewUrlParser: true, 
            useUnifiedTopology: true
        }) //Este metodo sirve para conectarse a la db
        console.log('>> Database connected')
    }
    catch{
        console.log('An error has occured!')
    }
}

export default connect