const joi = require('joi');
const { statusType } = require('../../config/constants.config');


const reviewCreateDTO = joi.object({
    text : joi.string().min(3).max(50).required(),
    reating: joi.number().required(),
    image: joi.string().allow(null),
    rating: joi.number().min(1).max(5).required(),
});


module.exports = {
    reviewCreateDTO
}