const { response, request } = require('express');
const Role = require('../models/ORM/Role')


/** 
* @param Object body
* @return Response query
* @return roles
*/


const postRole = async (req = request, res = response) => {

    try {

        const role = new Role(req.body);
        const data = await role.save();
        res.status(200).json({
            mensaje: 'Add role successfully',
            data: data
        });

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
* @return roles
*/

const getRoles = async (req = request, res = response) => {

    try {


        const role = await Role.findAll();
        res.status(200).json({ data: role });


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
* @return role
*/

const getRoleById = async (req = request, res = response) => {

    try {

        const { id } = req.params;

        const role = await Role.findOne({

            where: {

                id
            }
        })

        if (role == null) {

            res.status(500).json({

                message: ' Role does not exist'

            })
        } else {

            res.status(200).json({ data: role })

        }

    } catch (error) {


        return res.estatus(500).json({
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


const deleteRole = async (req = request, res = response) => {


    try {

        const { id } = req.params;
        const roleRow = await Role.destroy({
            where: {

                id
            }
        })


        if (roleRow == 0) {

            res.status(500).json({

                message: ' Role does not exist'
            })


        } else {

            res.status(200).json({

                message: 'Delete role succefully',
                count: roleRow

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


/** 
* @param Int id 
* @param Object body 
* @return Response query
* @return Int countRow
*/

const updateRole = async (req = request, res = response) => {

    try {

        const { id } = req.params;
        const { type, status } = req.body;

        const roleRow = await Role.update({
            type: type, status: status
        }, { where: { id } })

        if (roleRow == 0) {

            res.status(500).json({

                message: 'Role does not exist'

            })

        } else {


            res.status(200).json({

                message: 'Update role succefully',
                data: roleRow

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

    postRole,
    getRoles,
    getRoleById,
    deleteRole,
    updateRole


}