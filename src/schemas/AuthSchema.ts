import Joi from "joi";

interface signup {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
interface signin {
  email: string;
  password: string;
}
export const SignIn = Joi.object<signin>({
  email: Joi.string().email().required(),
  password: Joi.string().length(10),
});

export const SignUp = Joi.object<signup>({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().length(10).required(),
  confirmPassword: Joi.ref("password"),
});
