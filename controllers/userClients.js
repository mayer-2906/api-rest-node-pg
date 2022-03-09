const { response, request } = require('express');
const UserClient = require('../models/ORM/userClient');


/** 
* @param Object body
* @return Response query
* @return userClient 
*/

const postUserClient = async (req = request, res = response) => {

    try {
        const user_client = new UserClient(req.body);
        const data = await user_client.save();

        res.status(200).json({

            mensaje: 'Add user client successfully',
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
* @return userClients
*/


const getUserClient = async (req = request, res = response) => {

    try {

        const user_client = await UserClient.findAll();
        res.status(200).json({ data: user_client })


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
* @return client
*/

const getUserClientById = async (req = request, res = response) => {


    try {

        const { id } = req.params;
        const data = await UserClient.findOne({

            where: {

                id
            }
        })

        if (data == null) {

            res.status(200).json({

                message: 'User Client does not exist'
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


const deleteUserCient = async (req = request, res = response) => {

    try {

        const { id } = req.params;
        const userRow = await UserClient.destroy({

            where: { id }
        })


        if (userRow == 0) {


            res.status(500).json({

                message: 'User Client does not exist'

            })

        } else {


            res.status(200).json({


                message: 'Delete user client succefully',
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

const updateUserClient = async (req = request, res = response) => {

    try {

        const { id } = req.params
        const { status, user_id, client_id } = req.body;
        const userRow = await UserClient.update({

            status: status,
            user_id: user_id,
            client_id, client_id


        }, { where: { id } })


        if (userRow == 0) {

            res.status(500).json({

                message: 'User Client does not exist'

            })

        } else {

            res.status(200).json({

                message: 'Update user Client succefully',
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


    postUserClient,
    getUserClient,
    getUserClientById,
    deleteUserCient,
    updateUserClient

}