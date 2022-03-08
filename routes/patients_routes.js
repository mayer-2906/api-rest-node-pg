const { Router } = require("express");
// Controllers

const { getPatients, getPatient, postPatients, updatePatient, deletePatient } = require('../controllers/patients_controller')

const router = Router();

router.delete('/:id', deletePatient) //Delete Patients by id

router.put('/:id', updatePatient) //Update Patients by id


router.get('/', getPatients)//Get all patients
router.get("/:id", getPatient); //Get patient by id

router.post('/', postPatients) //Add Patient





module.exports = router;