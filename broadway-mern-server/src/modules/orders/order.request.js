const joi = require("joi");
const { statusType } = require("../../config/constants.config");

const orderCreateDTO = joi.object({
items: joi.array().items(
  joi.object({
    productId:joi.string().required(),
    quantity:joi.number().positive().required(),
    price: joi.number().positive().required()
  })
),
taxAmount: joi.number().positive(),
storePickUp: joi.number().positive(),
totalItems:joi.number().positive().required(),
totalAmount:joi.number().positive().required(),
originalPrice: joi.number().positive()
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
