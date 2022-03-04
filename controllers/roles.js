const { response, request } = require('express');
const { allRoles, addRoles, RolById, deleteRolByID, updateeRolByID } = require('../models/roles')



/** 
* @param Request request
* @param Response response
* @return Response Json
*/

const getRoles = async (req = request, res = response) => {

    try {

        const { count, users } = await allRoles();

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

const postRoles = async (req = request, res = response) => {

    const { type, status } = req.body;

    try {

        const { rows } = await addRoles(type, status);

        return res.status(200).json({

            message: 'Rol create succesfully',
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

const getRol = async (req = request, res = response) => {

    const id = req.params.id;

    try {

        const consulta = await RolById(id);

        if (consulta.rowCount != 1) {

            return res.status(500).json({

                message: 'Role does not exist',

            });

        } else {

            return res.status(200).json({

                role: consulta.rows

            })

        }

    } catch (error) {

        return res.status(500).json({

            message: 'Error querying role',

        });
    }

}

/** 
* @param Request request
* @param Response response
* @return Response Json
*/

const deleteRol = async (req = request, res = response) => {

    const id = req.params.id;

    try {

        const consulta = await deleteRolByID(id);

        if (consulta.rowCount != 1) {

            return res.status(500).json({

                message: 'Role does not exist',

            });

        } else {


            return res.status(200).json({


                message: 'Success deleting',

            })

        }

    } catch (error) {

        return res.status(500).json({

            message: 'Error querying role',

        });
    }

}


/** 
* @param Request request
* @param Response response
* @return Response Json
*/

const updateRol = async (req = request, res = response) => {
   
    const id = req.params.id;
    const { type, status } = req.body;
      

    try {

       
        const consulta = await updateeRolByID(id, type, status);
        

        if (consulta.rowCount != 1) {

            return res.status(500).json({

                message: 'Role does not exist',


            });

        } else {


            return res.status(200).json({


                message: 'Success update',
                rol: consulta.rows

            })

        }

    } catch (error) {

        return res.status(500).json({

            message: 'Error querying role (update)',

        });
    }


}


module.exports = {
    getRoles,
    postRoles,
    getRol,
    deleteRol,
    updateRol
};