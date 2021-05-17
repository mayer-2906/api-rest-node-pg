const express      = require('express')

class Server {

    constructor(){
        this.app  = express();
        this.port = 9000;

        // Routes
        this.paths = {
            users: '/api/users'
        }

        // Middlewares
        this.middlewares();

        //App Routes
        this.routes();
    }

    middlewares(){
        // Lectura y parseo del body
        this.app.use(express.json())
    }

    routes(){
        this.app.use(this.paths.users, require('../routes/users'))
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server up in: ${this.port} port`)
        })
    }

}

module.exports = Server;

