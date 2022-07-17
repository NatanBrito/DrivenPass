import Joi from "joi";

export const SignIn = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().length(10),
});

export const SignUp = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().length(10).required(),
  confirmPassword: Joi.ref("password"),
});
