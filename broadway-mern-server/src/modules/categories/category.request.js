const { link } = require('joi');
const joi = require('joi');
const { statusType } = require('../../config/constants.config');


const categoryCreateDTO = joi.object({
    title : joi.string().min(3).max(50).required(),

    status : joi.string().valid(...Object.values(statusType)).required(),
    image: joi.string().required(),
    parentId : joi.string().optional().empty(null,'').default(null),
    brands:joi.array().items(joi.string()).optional().empty(null,'').default(null)
});

const categoryUpdateDTO= joi.object({
    title : joi.string().min(3).max(50).required(),
    link : joi.string().uri().empty(null,'').optional().default(null),
    status : joi.string().valid(...Object.values(statusType)).required(),
    image: joi.string().optional()
});

module.exports = {
 categoryCreateDTO,
 categoryUpdateDTO
}
