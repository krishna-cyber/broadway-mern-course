const bcrypt = require('bcryptjs');
const mailService = require('../../services/mail.service');
const { randomStringGenerator } = require('../../utils/helper');
const userService= require('../user/user.service')


class AuthController{

    loginUser = async (req,res,next)=>{}

    registerUser = async (req,res,next)=>{

        try {
        
        
        // data transformation
         const data = userService.transformUserCreate(req);

         console.log(data);
         //Database store
           const user = await userService.createUser(data)
        
        //  sending mail service
        
        await userService.sendActivationEmail(data);
        
        
        // sending response
        res.status(200).json ({
            result: data,
            message:"User Created Successfully",
            meta: null
        })
            } catch (error) {
                console.log(error)
                next(error);
            }
        
        }

    activateUser = async (req,res,next)=>{
        try {
            const {activationToken} = req.params;
            if (activationToken.length !== 20){
               throw {statusCode: 422, message: 'Invalid activationToken'}
            }else{
                userService.getSingleUserByFilter({activationToken})
            }
        } catch (exception) {
            console.log(exception)
        }
    }



}

//  create an instance of the controller
const authcontroller = new AuthController();



//  exporting the authcontroller object
module.exports = authcontroller