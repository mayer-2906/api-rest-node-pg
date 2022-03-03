const { response, request } = require('express')

const { getCarePlan, 
        setCarePlan, 
        updateCare_Plan, 
        deleteCare_Plan}    = require('../models/care_plan_model')

const getCarePlans = async(req = request, res = response) => {
    
    try {

        //const user = await User();

        const { count, care_plan } = await getCarePlan();
        
        return res.json({
            count, 
            care_plan
        })    
        
    } catch (error) {
        console.log(error);

        return res.json({
            error
        }, 500)    
    }

}


const addCarePlans = async(req = request, res = response) => {
    
  try {

      const { name, status } = req.body; 

      const {count, care_plan } = await setCarePlan(name, status);
      
      return res.json({
          count, 
          care_plan
      })    
      
  } catch (error) {
      console.log(error);

      return res.json({
          error
      }, 500)    
  }

}

const updateCarePlan = async(req = request, res = response) => {
    
  try {

      const idCarePlan = req.params.id; 
      const {name, date, status}=req.body;

      const {count, care_plan } = await updateCare_Plan(idCarePlan, name, date, status);
      
      return res.json({
          count, 
          care_plan
      })    
      
  } catch (error) {
      console.log(error);

      return res.json({
          error
      }, 500)    
  }

}

const deleteCarePlan = async(req = request, res = response) => {
    
  try {

      const idCarePlan = req.params.id; 
      

      const {count, care_plan } = await deleteCare_Plan(idCarePlan)
      let mssg ='';
      count == 1 ? mssg='Borrado exitoso' : mssg='Ese plan no existe';
      return res.json({
          count, 
          care_plan,
          mssg
      })    
      
  } catch (error) {
      console.log(error);

      return res.json({
          error
      }, 500)    
  }

}

module.exports = {
    getCarePlans,
    addCarePlans,
    updateCarePlan,
    deleteCarePlan
};
