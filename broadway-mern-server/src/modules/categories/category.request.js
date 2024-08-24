const { link } = require('joi');
const joi = require('joi');
const { statusType } = require('../../config/constants.config');


const categoryCreateDTO = joi.object({
    name : joi.string().min(3).max(50).required(),
    link : joi.string().uri().optional(),
    description: joi.string().min(3).max(100).required(),
    status : joi.string().valid(...Object.values(statusType)).required(),
    image: joi.string().required(),
    parentId : joi.string().optional().empty(null,'').default(null),
});

const categoryUpdateDTO= joi.object({
    name : joi.string().min(3).max(50).required(),
    link : joi.string().uri().empty(null,'').optional().default(null),
    status : joi.string().valid(...Object.values(statusType)).required(),
    image: joi.string().optional()
});

module.exports = {
 categoryCreateDTO,
 categoryUpdateDTO
}
