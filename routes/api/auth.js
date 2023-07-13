const express = require("express");

const ctrl = require("../../controllers/auth");
const { validateBody, authenticate } = require("../../middlewares");

const { schemas } = require("../../models/user");
const router = express.Router();

// singup
router.post("/register", validateBody(schemas.registerSchema), ctrl.register);
// signin
router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

// logout
router.post("/logout", authenticate, ctrl.logout);

// getCurrentUser
router.get("/current", authenticate, ctrl.getCurrentUser);

// updateSubscription
router.patch(
  "/subscription",
  authenticate,
  validateBody(schemas.subscriptionSchema),
  ctrl.updateSubscription
);

module.exports = router;
