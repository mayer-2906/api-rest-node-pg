const { Router } = require('express');
const { getPacientes } = require("../controllers/pacientes");



const router = Router();



router.get('/', getPacientes)//Get pacientes


module.exports = router;