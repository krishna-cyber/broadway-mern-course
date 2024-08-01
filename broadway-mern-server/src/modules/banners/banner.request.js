const { link } = require('joi');
const joi = require('joi');
const { statusType } = require('../../config/constants.config');


const BannerCreateDTO = joi.object({
    title : joi.string().min(3).max(50).required(),
    link : joi.string().uri().empty(null,'').optional().default(null),
    status : joi.string().valid(...Object.values(statusType)).required(),
    image: joi.string().optional()
});

const BannerUpdateDTO= joi.object({
    title : joi.string().min(3).max(50).required(),
    link : joi.string().uri().empty(null,'').optional().default(null),
    status : joi.string().valid(...Object.values(statusType)).required(),
    image: joi.string().optional()
});

module.exports = {
    BannerCreateDTO,
    BannerUpdateDTO

}
