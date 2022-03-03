const express      = require('express');
const client = require('../database/config')


class Server {

    constructor(){
        this.app  = express();
        this.port = 9000;

        // Routes
        this.paths = {
            users: '/api/users',
            roles:'/api/roles',

        }

        // Middlewares
        this.middlewares();

        //inicializamos la base de datos
        this.dbConection();

        //App Routes
        this.routes();
    }

    middlewares(){
        // Lectura y parseo del body
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:  false}));

    }

    async dbConection (){

        try{            
            await client.connect();
        }catch(error){
            console.log(error);
            throw new Error('Error inicializando la base de datos');
        }
        
    }

    routes(){
        this.app.use(this.paths.users, require('../routes/users'))
        this.app.use(this.paths.roles, 
            require('../routes/roles'))
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server up in: ${this.port} port`)
        })
    }

}

module.exports = Server;

