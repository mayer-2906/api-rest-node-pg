const express      = require('express');
const client = require('../database/config')


class Server {

    constructor(){
        this.app  = express();
        this.port = 9000;

        // Routes
        this.paths = {
<<<<<<< HEAD
            users: '/api/users',
            care_plan: '/api/care_plan',
            clients: '/api/clients',
            appointments: '/api/appointments'
=======

            users: '/api/users',
            roles:'/api/roles',
            usersclients: '/api/usersclients'

>>>>>>> 0c87448a830faa4dd72f531992b29836cac5f909
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
<<<<<<< HEAD
        this.app.use(this.paths.care_plan, require('../routes/care_plan_routes'))
        this.app.use(this.paths.clients, require('../routes/clients_routes'))
        this.app.use(this.paths.appointments, require('../routes/appointments_routes'))

=======
        this.app.use(this.paths.roles, require('../routes/roles'))
        this.app.use(this.paths.usersclients, require('../routes/usersclients'))
>>>>>>> 0c87448a830faa4dd72f531992b29836cac5f909
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server up in: ${this.port} port`)
        })
    }

}

module.exports = Server;

