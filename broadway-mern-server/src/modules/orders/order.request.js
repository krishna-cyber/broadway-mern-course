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


module.exports = {
  
  orderCreateDTO,
};
