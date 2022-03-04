const { Router }            = require("express");
const { check }             = require("express-validator");

//middlewares
const { validateFields }    = require("../middlewares/validate-fields");

// Controllers
const {
        getAppointment, 
        getAppointments, 
        addAppointment, 
        updateAppointment, 
        deleteAppointment
      }                     = require("../controllers/appointments_controller");

const router = Router();

router.get("/", getAppointments);

router.get("/:id", getAppointment);

router.post(
  "/set",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check('date', 'Debe ser una fecha valida en formato Date').isDate(),
    //check("start", "La hora de inicio es obligatoria"),
    //check("end", "la hora final es obligatoria").not().isEmpty(),
    check("place", "El lugar es obligatorio").not().isEmpty(),
    check("status", "El status  debe ser un boolean").isBoolean(),
    check("patient_id", "El id del paciente es obligatorio").not().isEmpty(),
    check("user_client_id", "El status  debe ser un boolean").not().isEmpty(),
    check("care_plan_id", "El status  debe ser un boolean").not().isEmpty(),
    validateFields,
  ],
  addAppointment
);


router.put(
  "/update/:id",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check('date', 'Debe ser una fecha valida en formato Date').isDate(),
    //check("start", "La hora de inicio es obligatoria"),
    //check("end", "la hora final es obligatoria").not().isEmpty(),
    check("place", "El lugar es obligatorio").not().isEmpty(),
    check("status", "El status  debe ser un boolean").isBoolean(),
    check("patient_id", "El id del paciente es obligatorio").not().isEmpty(),
    check("user_client_id", "El status  debe ser un boolean").not().isEmpty(),
    check("care_plan_id", "El status  debe ser un boolean").not().isEmpty(),
    validateFields,
  ],
  updateAppointment
);

router.delete("/delete/:id", deleteAppointment);

module.exports = router;
