const bcrypt = require('bcryptjs');
const mailService = require('../../services/mail.service');
const { randomStringGenerator } = require('../../utils/helper');
const userService = require('./user.service');


class UserController{
//    get all users 
 userLists =async (req,res,next)=>{
   try {
        const users = await userService.getAllUsers();

      const meta =   await userService.countUsers();  // By default limit is 10
        res.json({
            result: users,
            message: 'All users',
            meta
        })
   } catch (error) {
    next(error);
   }
 }


// create a new user
userCreate = async (req,res,next)=>{

try {


// data transformation
 const data = await userService.transformUserCreate(req);

console.log(`Data is ready to create user `,data);
 //Database store
   const user = await userService.createUser(data)

//  sending mail service

await userService.sendActivationEmail(data);


// sending response
res.status(200).json ({
    result: user,
    message:"User Created Successfully,Activation mail sent",
    meta: null
})
    } catch (error) {
        next(error);
    }

}


userDetailById = (req,res,next)=>{
    const id = req.params.id;
   res.status(200).json({
       result: id,
       message: 'Get user by id',
       meta: null
   });
}   

// update user profile by id
userUpdate = (req,res,next)=>{
    const id = req.params.id;
    const data = req.body;
   res.status(200).json({
       result: id,
       message: 'Update user by id',
       meta: null
   });
}

// remove user by id
userRemove = (req,res,next)=>{
    const id = req.params.id;
    res.status(200).json({
         result: id,
         message: 'Remove user by id',
         meta: null
})
}
}

//  create an instance of the controller
const userController = new UserController();



//  exporting the userController object
module.exports = userController