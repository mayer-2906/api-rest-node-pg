const { response, request } = require('express');
const User = require('../models/ORM/User')

/** 
* @param Object body
* @return Response query
* @return user
*/

const postUser = async (req = request, res = response) => {
    try {
        const user = new User(req.body);
        const data = await user.save();

        res.status(200).json({

            mensaje: 'Add user successfully',
            data: data
        })

    } catch (error) {
        return res.status(500).json({

            message: 'Internal server error',
            description: 'Error in the query',
            error
        })

    }



}


/** 
* @return Response query
* @return user
*/

const getUser = async (req = request, res = response) => {

    try {

        const user = await User.findAll();
        res.status(200).json({ data: user })


    } catch (error) {

        res.status(500).json({

            message: 'Internal server error',
            description: 'Error in the query',
            error

        })

    }



}


/** 
* @param Int id  
* @return Response query
* @return user
*/

const getUserById = async (req = request, res = response) => {

    try {

        const { id } = req.params;
        const data = await User.findOne({

            where: {

                id
            }
        })


        if (data == null) {


            res.status(500).json({

                message: 'user Does not exist'

            })

        } else {

            res.status(200).json({

                data: data
            })

        }



    } catch (error) {

        return res.status(500).json({

            message: 'Internal server error',
            description: 'Error in the query',
            error


        })

    }

}

/** 
* @param Int id  
* @return Response query
* @return int countRow
*/

const deleteUser = async (req = request, res = response) => {

    try {

        const { id } = req.params;
        const userRow = await User.destroy({

            where: { id }
        })


        if (userRow == 0) {

            res.status(500).json({

                message: 'User does not exist'

            })

        } else {

            res.status(200).json({


                message: 'Delete user succefully',
                count: userRow

            })

        }



    } catch (error) {

        return res.status(500).json({

            mensaje: 'Internal server error',
            description: 'Error in the query',
            error

        })

    }



}

/** 
* @param Int id 
* @param Object body 
* @return Response query
* @return Int countRow
*/

const updateUser = async (req = request, res = response) => {

    try {

        const { id } = req.params
        const { name, last_name, email, password, status } = req.body;
        const userRow = await User.update({
            name: name,
            last_name: last_name,
            email: email,
            password: password,
            status: status

        }, { where: { id } })


        if (userRow == 0) {

            res.status(500).json({

                message: 'User does not exist'

            })

        } else {

            res.status(200).json({

                message: 'Update user succefully',
                data: userRow
            })

        }


    } catch (error) {

        res.status(500).json({

            mensaje: 'Internal server error',
            description: 'Error in the query',
            error

        })


    }


}



module.exports = {

    postUser,
    getUser,
    getUserById,
    deleteUser,
    updateUser


}
