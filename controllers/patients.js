
const { response, request } = require('express')
const Patient = require('../models/ORM/Patient')



const postPatient = async (req = request, res = response) => {

    const patient = new Patient(req.body);
    console.log(patient)

    try {

        await patient.save();
        res.status(200).json({ mensaje: 'Add patient successfully' });

    } catch (error) {


        return res.status(500).json({

            message: 'Internal server error',
            description: 'Error in the query',
            error
        })


    }


}


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


const getPatientById = async (req = request, res = response) => {


    try {

        const { id } = req.params;
        const patient = await Patient.findOne({
            where: {
                id
            }
        })

        res.status(200).json({ patient: patient });


    } catch (error) {

        return res.status(500).json({

            message: 'Internal server error',
            description: 'Error in the query',
            error
        })


    }




}

const deletePatient = async (req = request, res = response) => {


    try {

        const { id } = req.params;
        const patientRow = await Patient.destroy({
            where: {
                id
            }
        })

        res.status(200).json({
            message: 'Patient deleted successfully',
            count: patientRow
        });


    } catch (error) {

        return res.status(500).json({

            message: 'Internal server error',
            description: 'Error in the query',
            error

        })


    }



}



module.exports = {

    postPatient,
    getPatient,
    getPatientById,
    deletePatient

};
