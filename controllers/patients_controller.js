const { response, request } = require('express')

const { allPatients, patientById, addPatients} = require('../models/patients_model')


/** 
* @param Request request
* @param Response response
* @return Response Json
*/

const getPatients = async (req = request, res = response) => {

    try {

        const { count, users } = await allPatients();

        return res.json({
            count,
            users
        })

    } catch (error) {
        console.log(error);

        return res.json({
            error
        }, 500)
    }

}

/** 
* @param Request request
* @param Response response
* @return Response Json
*/

const getPatient = async (req = request, res = response) => {


    const id = req.params.id;

    try {

        const consulta = await patientById(id);

        if (consulta.rowCount != 1) {

            return res.status(500).json({

                message: 'Patients does not exist',

            });

        } else {

            return res.status(200).json({

                role: consulta.rows

            })

        }

    } catch (error) {

        return res.status(500).json({

            message: 'Error querying patients',

        });
    }


}

/** 
* @param Request request
* @param Response response
* @return Response Json
*/

const postPatients = async (req = request, res = response) => {

    const { name, last_name, email, gender, app_installed, status, user_client_id  } = req.body;

    try {

        const { rows } = await addPatients(name, last_name, email, gender, app_installed, status, user_client_id);

        return res.status(200).json({

            message: 'Patients create succesfully',
            rol: rows

        })


    } catch (error) {

        return res.status(500).json({
            message: 'Failed to add patients'
        });

    }



}

module.exports = {
    getPatients,
    getPatient,
    postPatients
};