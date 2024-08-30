const joi = require("joi");
const { statusType } = require("../../config/constants.config");

const orderCreateDTO = joi.object({
  title: joi.string().min(3).max(50).required(),
  price: joi.number().required(),
  discount: joi.number().optional().empty(null, "").default(null),
  description: joi.string().required().min(4),
  status: joi
    .string()
    .valid(...Object.values(statusType))
    .required(),
  image: joi.string().required(),
  stock: joi.number().required(),
});

const orderUpdateDTO = joi.object({
  title: joi.string().min(3).max(50).required(),
  price: joi.number().required(),
  discount: joi.number().optional().empty(null, "").default(null),
  description: joi.string().required().min(4),
  status: joi
    .string()
    .valid(...Object.values(statusType))
    .required(),
  image: joi.string().required(),
  parentId: joi.string().optional().empty(null, "").default(null),
});

module.exports = {
  orderUpdateDTO,
  orderCreateDTO,
};
