const Joi = require("joi");

// data tramsfer object
const userCreateDTO = Joi.object({
  fullName: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required().messages({
    "string.email": "Email must be a valid email",
    "any.required": "Email is required",
  }),
  address: Joi.string().optional().empty(),
  phone: Joi.string().min(10).max(15).optional(),
  password: Joi.string().min(6).max(20).required(),
 role:Joi.string().required(),
  profile: Joi.optional().empty(),
});

module.exports = {
  userCreateDTO,
};
