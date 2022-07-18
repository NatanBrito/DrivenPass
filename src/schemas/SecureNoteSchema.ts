import Joi from "joi";

const SecureNote = Joi.object({
  title: Joi.string().max(50).required(),
  titleAnnotation: Joi.string().max(50).required(),
  annotation: Joi.string().max(1000).required(),
});
export default SecureNote;
