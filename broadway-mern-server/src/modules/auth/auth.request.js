const joi = require('joi');

const LoginDTO = joi.object({
    email: joi.string().email().required(),
    password : joi.string().required()
});

// const registerUserDTO = joi.object({
//     fullName.
//     email,
//     password,
//     confirmPassword.
//     image,
// })

module.exports= {
    LoginDTO
}
