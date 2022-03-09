const { Router } = require("express");
const { check } = require("express-validator");

//middlewares
const { validateFields } = require("../middlewares/validate-fields");

// Controllers
const {
  addClient,
  getClients,
  getClientById,
  updateClient,
  deleteClient
} = require("../controllers/Client");

const router = Router();

router.get("/", getClients);

router.get("/:id", getClientById);

router.post(
  "/",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("identification", "La identificación es obligatoria").not().isEmpty(),
    check("city", "La ciudad es obligatoria").not().isEmpty(),
    check("country", "El país es obligatorio").not().isEmpty(),
    check("address", "La dirección es obligatoria").not().isEmpty(),
    check("status", "El status  debe ser un boolean").isBoolean(),
    validateFields,
  ],
  addClient
);


router.put(
  "/:id",
  [
    check("name", "El nombre es obligatorio y maximo de 150 caracteres").exists().isString().isLength({max: 150}).notEmpty(),
    check("identification", "La identificación es obligatoria").not().isEmpty(),
    check("city", "La ciudad es obligatoria").isString().not().isEmpty(),
    check("country", "El país es obligatorio").not().isEmpty(),
    check("address", "La dirección es obligatoria").not().isEmpty(),
    check("status", "El status  debe ser un boolean").isBoolean(),
    validateFields,
  ],
  updateClient
);

router.delete("/:id", deleteClient);

module.exports = router;
