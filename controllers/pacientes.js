
const { response, request } = require('express')
const Pacientes  = require('../models/ORM/Pacientes')



const getPacientes = async (req = request, res = response) => {

    await Pacientes.create({

        id: 1254,
        user_client_id: 890,
        name: 'Marriela',
        last_name: 'Candelo',
        email: 'mcandelo@gmail.com',
        gender: 'Femenino',
        app_installed: true,
        status: true
        
    }).then(pacien => {

        res.json(pacien)
    })



}

module.exports = {

    getPacientes

};
