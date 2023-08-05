const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../helpers/");

const subscriptionList = ["starter", "pro", "business"];

const nameRegexp = /^(?=.*[A-Za-z])[A-Za-z\d@$!. %*#?&^_-]{2,32}$/;
const passRegexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&^_-]{8,64}$/;
// /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&^_-]{8,64}$/;
const emailRegexp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const userSchema = new Schema(
  {
    name: {
      type: String,
      match: nameRegexp,
      required: [true, "Name is required"],
      minlenght: 2,
      maxlenght: 32,
    },
    password: {
      type: String,
      match: passRegexp,
      required: [true, "Set password for user"],
      minlenght: 8,
      maxlenght: 64,
    },
    email: {
      type: String,
      match: emailRegexp,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: subscriptionList,
      default: "starter",
    },
    token: {
      type: String,
      default: "",
    },
    avatarURL: {
      type: String,
      required: true,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationCode: {
      type: String,
      default: "",
      required: [true, "Verify Code is required"],
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

const registerSchema = Joi.object({
  name: Joi.string().pattern(nameRegexp).required(),
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().pattern(passRegexp).min(8).max(64).required(),
  subscription: Joi.string(),
});

const emailSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().pattern(passRegexp).min(8).max(64).required(),
});

const subscriptionSchema = Joi.object({
  subscription: Joi.string()
    .valid(...subscriptionList)
    .required()
    .messages({ "any.required": "Missing field subscription" }),
});

const schemas = {
  registerSchema,
  loginSchema,
  subscriptionSchema,
  emailSchema,
};
const User = model("user", userSchema);

module.exports = {
  User,
  schemas,
};
