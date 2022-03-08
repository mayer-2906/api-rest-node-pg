
const { response, request } = require('express')
const Pacientes = require('../models/ORM/Patient')



const getPacientes = async (req = request, res = response) => {

    Pacientes.create({

        id: 1289,
        user_client_id: 5895,
        name: 'Mariela',
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
