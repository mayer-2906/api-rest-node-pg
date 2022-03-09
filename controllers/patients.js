
const { response, request } = require('express');
const Patient = require('../models/ORM/Patient')


/** 
* @param Object body
* @return Response query
* @return patient
*/


const postPatient = async (req = request, res = response) => {

    const patient = new Patient(req.body);


    try {

        const data = await patient.save();
        res.status(200).json({
            mensaje: 'Add patient successfully',
            data: data
        });

    } catch (error) {


        return res.status(500).json({

            message: 'Internal server error',
            description: 'Error in the query',
            error
        })


    }


}

/** 
* @return Response query
* @return patients
*/


const getPatient = async (req = request, res = response) => {

    try {

        const patient = await Patient.findAll();

        res.status(200).json({ data: patient });

    } catch (error) {


        return res.status(500).json({

            message: 'Internal server error',
            description: 'Error in the query',
            error
        })

    }




}


/** 
* @param Int id  
* @return Response query
* @return patient
*/


const getPatientById = async (req = request, res = response) => {


    try {

        const { id } = req.params;
        const patient = await Patient.findOne({
            where: {
                id
            }
        })

        if (patient == null) {

            res.status(500).json({


                message: 'Patient does not exist'

            })

        } else {

            res.status(200).json({ patient: patient });

        }


    } catch (error) {

        return res.status(500).json({

            message: 'Internal server error',
            description: 'Error in the query',
            error
        })


    }




}

/** 
* @param Int id  
* @return Response query
* @return int countRow
*/


const deletePatient = async (req = request, res = response) => {


    try {

        const { id } = req.params;
        const patientRow = await Patient.destroy({
            where: {
                id
            }
        })

        if (patientRow == 0) {

            res.status(500).json({


                message: 'Patient Does not exist'

            })



        } else {


            res.status(200).json({
                message: 'Patient deleted successfully',
                count: patientRow
            });

        }




    } catch (error) {

        return res.status(500).json({

            message: 'Internal server error',
            description: 'Error in the query',
            error

        })


    }



}


/** 
* @param Int id 
* @param Object body 
* @return Response query
* @return Int countRow
*/


const updtatePatient = async (req = request, res = response) => {

    try {

        const { id } = req.params;
        const { name, last_name, email, gender, app_installed, status, user_client_id } = req.body;

        const patientRow = await Patient.update({
            name: name, last_name,
            last_name,
            email: email,
            gender: gender,
            app_installed: app_installed,
            status: status,
            user_client_id: user_client_id
        }, { where: { id } })


        if (patientRow == 0) {

            res.status(500).json({
                message: 'Patient does not exist'

            })

        } else {

            res.status(200).json({

                message: 'Patient update succefully',
                data: patientRow


            })

        }

    } catch (error) {

        res.status(500).json({


            mensaje: 'Internal server error',
            description: 'Error in the query',
            error


        })

    }



}



module.exports = {

    postPatient,
    getPatient,
    getPatientById,
    deletePatient,
    updtatePatient

};
