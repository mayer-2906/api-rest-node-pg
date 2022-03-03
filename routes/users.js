const { Router } = require('express');
const { check }  = require('express-validator');
const {validateFiles} = require('../middlewares/validateFiles')


const { getUsers, getUser, deleteUser, postUser } = require('../controllers/users')


const router = Router();



// routes
router.get('/', getUsers)

router.get('/:id', getUser ) //Get role by id

router.delete('/:id', deleteUser) //Delete role by id

router.post('/', postUser) //AddUser










module.exports = router;
