import Joi from "joi";

export const Network = Joi.object({
  title: Joi.string().required(),
  nameNetwork: Joi.string().required(),
  passwordNetwork: Joi.string().required(),
});
