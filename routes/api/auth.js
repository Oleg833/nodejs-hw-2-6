const express = require("express");

const ctrl = require("../../controllers/auth");
const { validateBody, authenticate, upload } = require("../../middlewares");

const { schemas } = require("../../models/user");
const router = express.Router();

// singup
router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

router.get("/verify/:verificationCode", ctrl.verifyEmail);

router.post(
  "/verify",
  validateBody(schemas.emailSchema),
  ctrl.resendVerifyEmail
);
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

// updateAvatar
router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;
