const { Router } = require('express');

const {
    postRole,
    getRole,
    getRoleById,
    deleteRole,
    updateRole

} = require('../controllers/roles');


//Route   
const router = Router();


router.post('/', postRole) //Add role
router.get('/', getRole) //Get all role
router.get('/:id', getRoleById)//Get role by id
router.delete('/:id', deleteRole) //Delete role by id
router.put('/:id', updateRole ) //Update role by id

module.exports = router;


