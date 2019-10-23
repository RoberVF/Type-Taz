//Pagina principal en la que se llaman a los modulos

import App from './app';
import database from './database'


//Start the server
database()
const app= new App();
app.start()