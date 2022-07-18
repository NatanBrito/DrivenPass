import Joi from "joi";

export const Credentials = Joi.object({
  url: Joi.string().uri().required(),
  title: Joi.string().max(50).required(),
  password: Joi.string().required(),
  credentialUser: Joi.string().required(),
  titleCredential: Joi.string().required(),
});
