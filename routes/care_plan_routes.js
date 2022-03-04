const { Router } = require('express');
const { check }  = require('express-validator');

//middlewares
const { validateFields } = require('../middlewares/validate-fields')

// Controllers
const { getCarePlans, addCarePlans, updateCarePlan, deleteCarePlan} = require('../controllers/care_plan_controller')

const router = Router();

router.get('/', getCarePlans)

router.post('/set',
  [    
  check('name', 'El nombre es obligatorio').not().isEmpty(),
  validateFields
  ],
  addCarePlans
)
router.put('/update/:id', 
  [
    check('name', 'El nombre es obligatorio').isString(),
    check('date', 'Debe ser una fecha valida').isDate(),
    check('status', 'El status debe ser un boolean').isBoolean(),
    validateFields
  ],
  updateCarePlan
);

router.delete('/delete/:id', deleteCarePlan )

module.exports = router;