const { Router } = require("express");
const { updatePatient, deletePatient } = require('../controllers/patients_controller')



const router = Router();

//router.get("/", getPatients); //Get all patients

//router.get("/:id", getPatient); //Get patient by id

router.delete('/:id', deletePatient) //Delete Patients by id

//router.post('/', postPatients) //Add Patients

router.put('/:id', updatePatient) //Update Patients by id






module.exports = router;