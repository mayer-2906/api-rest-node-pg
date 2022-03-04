const { response, request } = require('express')
const { allUsersClients, userClient, deleteUserClientByID, addUserClients, updateUserClinetByID } = require('../models/usersclient')



/** 
* @param Request request
* @param Response response
* @return Response Json
*/


const getUsersClients = async (req = request, res = response) => {

    try {

        const { count, usersClients } = await allUsersClients();

        return res.json({
            count,
            usersClients
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

const getUseClient = async (req = request, res = response) => {


    const id = req.params.id;

    try {

        const consulta = await userClient(id);

        if (consulta.rowCount != 1) {

            return res.status(500).json({

                message: 'UserClient does not exist',

            });

        } else {

            return res.status(200).json({

                role: consulta.rows

            })

        }

    } catch (error) {

        return res.status(500).json({

            message: 'Error querying user',

        });
    }




}


/** 
* @param Request request
* @param Response response
* @return Response Json
*/

const deleteUserClients = async (req = request, res = response) => {


    const id = req.params.id;

    try {

        const consulta = await deleteUserClientByID(id);

        if (consulta.rowCount != 1) {

            return res.status(500).json({

                message: 'UserClient does not exist',

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


/** 
* @param Request request
* @param Response response
* @return Response Json
*/

const postUserClient = async (req = request, res = response) => {


    const { status, user_id, client_id } = req.body;

    try {

        const { rows } = await addUserClients(status, user_id, client_id);

        return res.status(200).json({

            message: 'UserClient create succesfully',
            rol: rows

        })


    } catch (error) {

        return res.status(500).json({
            message: 'Failed to add UserClient',

        });

    }




}


/** 
* @param Request request
* @param Response response
* @return Response Json
*/

const updateUserClients = async (req = request, res = response) => {


    const id = req.params.id;
    const { status, user_id, client_id  } = req.body;

    try {

        const consulta = await updateUserClinetByID(status, user_id, client_id , id);


        if (consulta.rowCount != 1) {

            return res.status(500).json({

                message: 'UserClient does not exist',

            });

        } else {

            return res.status(200).json({

                message: 'Success update',
                rol: consulta.rows
            })
        }

    } catch (error) {

        return res.status(500).json({

            message: 'Error querying UserClient (update)',

        });
    }



}



module.exports = {
    getUsersClients,
    getUseClient,
    deleteUserClients,
    postUserClient,
    updateUserClients

};
