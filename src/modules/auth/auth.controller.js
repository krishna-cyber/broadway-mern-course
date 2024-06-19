const bcrypt = require('bcryptjs');
const mailService = require('../../services/mail.service');
const { randomStringGenerator } = require('../../utils/helper');
const userService = require('./user.service');


class authController{

}

//  create an instance of the controller
const authcontroller = new authcontroller();



//  exporting the authcontroller object
module.exports = authcontroller