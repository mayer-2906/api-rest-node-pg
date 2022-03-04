const { Router } = require('express');
const {check} = require('express-validator')
const {validateFiles} = require('../middlewares/validateFiles')


// Controllers
const { getRoles, postRoles, getRol, deleteRol, updateRol} = require('../controllers/roles')

const router = Router();

// routes 
router.get('/', getRoles) //Get all roles


router.post('/', [
check('type', 'Debe ser un String').isString().notEmpty(),
check('status', 'Debe ser un boolean').isBoolean(),
validateFiles
], postRoles ) //Add new roles


router.get('/:id', getRol ) //Get role by id
router.delete('/:id', deleteRol) //Delete role by id
router.put('/:id', updateRol) //Update role by id

// exportar routes
module.exports = router;


