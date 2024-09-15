const joi = require('joi');
const { statusType } = require('../../config/constants.config');


const productCreateDTO = joi.object({
    title : joi.string().min(3).max(50).required(),
    price: joi.number().required(),
    discount: joi.number().optional().empty(null,'').default(null), 
    description: joi.string().required().min(4),
    status : joi.string().valid(...Object.values(statusType)).required(),
    image: joi.string().required(),
stock: joi.number().required(),
category: joi.array().min(1).required(),

});

const productUpdateDTO= joi.object({
    title : joi.string().min(3).max(50).optional(),
    price: joi.number().optional(),
    discount: joi.number().optional().empty(null,'').default(null), 
    description: joi.string().optional().min(4),
    stock: joi.number().optional(),
    category: joi.array().min(1).optional(),
    status : joi.string().valid(...Object.values(statusType)).optional(),
    image: joi.string().optional(),
    parentId : joi.string().optional().empty(null,'').default(null),
});

module.exports = {
    productCreateDTO,
    productUpdateDTO

}
