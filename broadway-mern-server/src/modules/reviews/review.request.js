const joi = require('joi');
const { statusType } = require('../../config/constants.config');


const reviewCreateDTO = joi.object({
    text : joi.string().min(3).max(400).required(),
    "image[]": joi.string().allow(null),
    rating: joi.number().min(1).max(5).required(),
    reviewedFor   : joi.string().required(),
});


module.exports = {
    reviewCreateDTO
}