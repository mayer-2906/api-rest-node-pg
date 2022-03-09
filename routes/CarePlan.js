const { Router } = require('express');
const { check }  = require('express-validator');

//middlewares
const { validateFields } = require('../middlewares/validate-fields')

// Controllers
const { addCarePlan, 
        getCarePlanById,
        getCarePlans,
        updateCarePlan,
        deleteCarePlan} = require('../controllers/CarePlan')

const router = Router();

router.get('/', getCarePlans)

router.get('/:id', getCarePlanById)

router.post('/',
  [    
  check('name', 'El nombre es obligatorio').not().isEmpty(),
  validateFields
  ],
  addCarePlan
)
router.put('/:id', 
  [
    check('name', 'El nombre es obligatorio').isString(),
    //check('date', 'Debe ser una fecha valida').isDate(),
    check('status', 'El status debe ser un boolean').isBoolean(),
    validateFields
  ],
  updateCarePlan
);

router.delete('/:id', deleteCarePlan )

module.exports = router;