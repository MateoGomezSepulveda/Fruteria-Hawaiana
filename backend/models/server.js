const express = require('express');
const cors = require('cors');
const {dbConnection} = require('../database/config.js');
class Server {
    
    constructor(){
        this.app = express();
        
        this.port = process.env.PORT

        this.paths = {
            heladosPath: '/api/helados',
            categoriasPath: '/api/categorias',
            usuariosPath: '/api/usuarios',
            authPath : '/api/auth',
        }
        

        // Conectar a base de datos MONGODB
        this.connectDB();

        // Middlewares
        this.middlewares();
        // Routing
        this.routes();
    }

    async connectDB(){
        await dbConnection();
    }

    middlewares(){
        // ´PUBLIC DIRECTORY
        this.app.use(express.static('public'));
        // Leer y parsear
        this.app.use(express.json());
        // cors
        this.app.use(cors())
    }

    routes(){
        this.app.use(this.paths.usuariosPath, require("../routes/usuario.routes.js"));
        this.app.use(this.paths.authPath, require("../routes/auth.routes.js"));
        this.app.use(this.paths.categoriasPath, require("../routes/categoria.routes.js"));
        this.app.use(this.paths.heladosPath, require("../routes/helado.routes.js") );
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`SERVIDOR CONECTADO EN EL PUERTO ${this.port}`);
        })
    }
}

module.exports = Server;