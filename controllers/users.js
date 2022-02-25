const { response, request} = require('express')

const { allUsers } = require('../models/users')

const getUsers = async(req = request, res = response) => {
    
    try {

        //const user = await User();

        const { count, users } = await allUsers();
        
        return res.json({
            count, 
            users
        })    
        
    } catch (error) {
        console.log(error);

        return res.json({
            error
        }, 500)    
    }

}

module.exports = {
    getUsers
};
