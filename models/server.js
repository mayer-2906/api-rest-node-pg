const express = require('express');
const client = require('../database/config')
const connection = require('../database/connection')


class Server {

    constructor() {
        this.app = express();
        this.port = 9000;

        // Routes
        this.paths = {

            
            roles: '/api/roles',
            patients: '/api/patients',
            users: '/api/users',
        }

        // Middlewares
        this.middlewares();

        //inicializamos la base de datos
        this.dbConection();



        //App Routes
        this.routes();
    }

    middlewares() {
        // Lectura y parseo del body
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));

    }


    /* Conexion BD Normal
    
    async dbConection (){

        try{            
            await client.connect();
        }catch(error){
            console.log(error);
            throw new Error('Error inicializando la base de datos');
        }
        
    }
    
    
    
    */

    //Force false : Hace drop tables
    async dbConection() {

        try {
            await connection.sync({ force: false });
            console.log('Connection DB successfully.');
        } catch (error) {
            console.error('Bad DB connection:', error);
        }
    }




    routes() {

        this.app.use(this.paths.roles, require('../routes/role'))
        this.app.use(this.paths.patients, require('../routes/patient'))
        this.app.use(this.paths.users, require('../routes/user'))





    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server up in: ${this.port} port`)
        })
    }

}

module.exports = Server;

