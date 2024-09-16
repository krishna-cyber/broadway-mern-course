const joi = require('joi');
const { statusType } = require('../../config/constants.config');


const brandCreateDTO = joi.object({
    title : joi.string().min(3).max(50).optional(),
    link : joi.string().uri().empty(null,'').optional().default(null),   
    status : joi.string().valid(...Object.values(statusType)).optional(),
    image: joi.string().required(),
    parentId : joi.string().optional().empty(null,'').default(null),
});

const brandUpdateDTO= joi.object({
    title : joi.string().min(3).max(50).optional(),
    link : joi.string().uri().empty(null,'').optional().default(null),
    status : joi.string().valid('active','inactive').optional(),
    image: joi.string().optional()
});

module.exports = {
   brandCreateDTO,
   brandUpdateDTO

}
