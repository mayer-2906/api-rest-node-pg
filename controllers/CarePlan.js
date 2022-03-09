
const { response, request } = require('express')
const CarePlan  = require('../models/ORM/CarePlan')
const moment = require('moment');

/** 
* @param Request request
* @param Response response
* @return Response Json
*/


const addCarePlan = async (req = request, res = response) => {

  const date = moment(new Date()).format("YYYY-MM-DD");

  try {
    const { name, status } = req.body; 

    const data= await CarePlan.create({
        name,
        date,
        status
        })
    data ?
    res.json(data) :
    res.json({
      mssg: "error creating care plan"
    })
    
  } catch (error) {
    console.log(error);
  }



}

/** 
* @param Request request
* @param Response response
* @return Response Json
*/

const updateCarePlan = async (req=request, res=response) => {
  
  try{

    const { name, date, status } = req.body;
    const { id } = req.params
    const timestamp = moment().format('YYYY-MM-DD')
    
    const data = await CarePlan.update( { name, date, status, updated_at: timestamp } , {
        where: { id }
    })
    res.json({
      data
    })
  }
  catch(error){
    console.log(error);
  };
}

/** 
* @param Request request
* @param Response response
* @return Response Json
*/

const getCarePlanById = async (req = request, res = response)=>{

  try {
    const {id} = req.params
    const data = await CarePlan.findByPk(id)
    !data? 
    res.json({
      mssg: "care plan no exist"
    }):
    res.json({
      care_plan: data
    })
  } catch (error) {

    console.log(error)
    
  }

}

/** 
* @param Request request
* @param Response response
* @return Response Json
*/
const getCarePlans = async (req = request, res = response) => {

  try {
    const data = await CarePlan.findAll()
    res.json({
      care_plans: data
    })
  } catch (error) {
    console.log(error)
  }

}

const deleteCarePlan = async (req=request, res=response) => {
  try {
    const { id } = req.params

    const plan = await CarePlan.findByPk(id);
    const resp = await plan.destroy()
    res.json({
      resp,
      mssg:"Delete succesfully"
    })
  } catch (error) {
   console.log(error); 
  }
}


module.exports = {

    addCarePlan,
    getCarePlanById,
    getCarePlans,
    updateCarePlan,
    deleteCarePlan
};
