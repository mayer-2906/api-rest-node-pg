const { Router } = require('express');
const {
    postUser,
    getUser,
    getUserById,
    deleteUser,
    updateUser } = require('../controllers/users')

//Routes
const router = Router();


router.post('/', postUser) //Add user
router.get('/', getUser)//Get all users
router.get('/:id', getUserById)//Get user by id
router.delete('/:id', deleteUser)//Deleted user by id
router.put('/:id', updateUser)//Update user by id 

module.exports = router;