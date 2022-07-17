import Joi from "joi";

export const Credentials = Joi.object({
  url: Joi.string().uri().required(),
  title: Joi.string().required(),
  name: Joi.string().required(),
  password: Joi.string().required(),
});
