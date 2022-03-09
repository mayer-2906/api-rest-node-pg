const { Router }            = require("express");
const { check }             = require("express-validator");

//middlewares
const { validateFields }    = require("../middlewares/validate-fields");

// Controllers
const {
        addAppointment,
        getAppointmentById,
        getAppointments,
        updateAppointment,
        deleteAppointment
      }                     = require("../controllers/Appoinment");

const router = Router();

router.get("/", getAppointments);

router.get("/:id", getAppointmentById);

router.post(
  "/",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    //check('date', 'Debe ser una fecha valida en formato Date').isDate(),
    //check("start", "La hora de inicio es obligatoria"),
    //check("end", "la hora final es obligatoria").not().isEmpty(),
    check("place", "El lugar es obligatorio").not().isEmpty(),
    check("status", "El status  debe ser un boolean").isBoolean(),
    check("patient_id", "El id del paciente es obligatorio").not().isEmpty(),
    check("user_client_id", "El id del user_client es obligatorio").not().isEmpty(),
    check("care_plan_id", "El id del care_plan es obligatorio").not().isEmpty(),
    validateFields,
  ],
  addAppointment
);


router.put(
  "/:id",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check('date', 'Debe ser una fecha valida en formato Date').isDate(),
    check("start", "La hora de inicio es obligatoria"),
    check("end", "la hora final es obligatoria").not().isEmpty(),
    check("place", "El lugar es obligatorio").not().isEmpty(),
    check("status", "El status  debe ser un boolean").isBoolean(),
    check("patient_id", "El id del paciente es obligatorio").not().isEmpty(),
    check("user_client_id", "El status  debe ser un boolean").not().isEmpty(),
    check("care_plan_id", "El status  debe ser un boolean").not().isEmpty(),
    validateFields,
  ],
  updateAppointment
);

router.delete("/:id", deleteAppointment);

module.exports = router;
