const { Router } = require('express');

const { getUsersClients, getUseClient, deleteUserClients, postUserClient, updateUserClients} = require('../controllers/usersclients')

const router = Router();


// routes
router.get('/', getUsersClients) //Get all UserClients
router.get('/:id', getUseClient ) //Get userClients by id
router.delete('/:id', deleteUserClients) //Delete userClients by id
router.post('/', postUserClient) //AddUser
router.put('/:id', updateUserClients) //Update usersClients by id


module.exports = router;