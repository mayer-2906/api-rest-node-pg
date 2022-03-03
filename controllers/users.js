const { response, request } = require('express')
const { allUsers, user, deleteUserByID, addUser } = require('../models/users')




/** 
* @param Request request
* @param Response response
* @return Response Json
*/

const getUsers = async (req = request, res = response) => {

    try {

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


/** 
* @param Request request
* @param Response response
* @return Response Json
*/

const postUser = async (req = request, res = response) => {


    const { name, last_nam, email, password,status} = req.body;

    try {

        const { rows } = await addUser(name, last_nam, email, password, status);

        return res.status(200).json({

            message: 'User create succesfully',
            rol: rows

        })


    } catch (error) {

        return res.status(500).json({
            message: 'Failed to add role',

        });

    }





}


/** 
* @param Request request
* @param Response response
* @return Response Json
*/


const getUser = async (req = request, res = response) => {

    const id = req.params.id;

    try {

        const consulta = await user(id);

        if (consulta.rowCount != 1) {

            return res.status(500).json({

                message: 'User does not exist',

            });

        } else {

            return res.status(200).json({

                role: consulta.rows

            })

        }

    } catch (error) {

        return res.status(500).json({

            message: 'Error querying usee',

        });
    }

}


/** 
* @param Request request
* @param Response response
* @return Response Json
*/


const deleteUser = async (req = request, res = response) => {


    const id = req.params.id;

    try {

        const consulta = await deleteUserByID(id);

        if (consulta.rowCount != 1) {

            return res.status(500).json({

                message: 'User does not exist',

            });

        } else {

            return res.status(200).json({

                message: 'Success deleting',

            })

        }

    } catch (error) {

        return res.status(500).json({

            message: 'Error querying user',

        });
    }


}




module.exports = {
    getUsers,
    getUser,
    deleteUser,
    postUser
};
