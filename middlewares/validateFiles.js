const { response } = require('express') //Response express
const { validationResult } = require('express-validator') //Result validation 


const validateFiles = (req, res = response, next) => {

    const errors = validationResult(req)

    if (!errors.isEmpty()) {

        return res.status(400).json({

            ok: false,
            errors: errors.mapped() //Buscar mensajes en el router

        })

    }

    next();



}

module.exports = {

    validateFiles

}