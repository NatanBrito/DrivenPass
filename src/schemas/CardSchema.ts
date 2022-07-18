// import { cards } from "@prisma/client";
import joiNormal from "joi";
import joiDate from "@joi/date";

const Joi = joiNormal.extend(joiDate);

// type schemaCard = Omit<cards, "id">;
export const Card = Joi.object({
  title: Joi.string().required(),
  titleCard: Joi.string().required(),
  numberCard: Joi.string()
    .regex(/^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{2}$/)
    .required(),
  cardHolderName: Joi.string().required(),
  cvv: Joi.string().length(3).required(),
  password: Joi.string()
    .regex(/^[0-9]{4}$/)
    .required(),
  expirateDate: Joi.date().format("MM-YY").required(),
  isVirtual: Joi.boolean().required(),
  type: Joi.string().valid("credit", "debit", "both").required(),
});
