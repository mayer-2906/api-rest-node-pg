const { Router } = require('express');
const { postPatient, getPatient, getPatientById, deletePatient} = require("../controllers/patients");

//Rout
const router = Router();



router.post('/', postPatient)//Post patient
router.get('/', getPatient)//Get patient
router.get('/:id', getPatientById)//Get patient by id
router.delete('/:id', deletePatient)//Delete patient by id


module.exports = router;