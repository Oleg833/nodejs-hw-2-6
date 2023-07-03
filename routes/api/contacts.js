const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/contacts");
const { validateBody } = require("../../middlewares/validateBody");
const { addSchema } = require("../../schemas/contacts");

router.get("/", ctrl.getAllContacts);

router.get("/:contactId", ctrl.getById);

router.post("/", validateBody(addSchema), ctrl.addContact);

router.delete("/:contactId", ctrl.deleteById);

router.put("/:contactId", ctrl.updateById);

module.exports = router;
