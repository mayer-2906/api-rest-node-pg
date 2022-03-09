const { Router } = require('express');
const {
    postUserClient,
    getUserClient,
    getUserClientById,
    deleteUserCient,
    updateUserClient } = require('../controllers/userClients')


//Routes
const router = Router();

router.post('/', postUserClient)//Add user client
router.get('/', getUserClient)//Get user client
router.get('/:id', getUserClientById)//Get user client by id
router.delete('/:id', deleteUserCient)//Delete user client by id
router.put('/:id', updateUserClient)//Update user client by id

module.exports = router;