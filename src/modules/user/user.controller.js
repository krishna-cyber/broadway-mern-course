const bcrypt = require('bcryptjs');

class UserController{
//    get all users 
 userLists = (req,res,next)=>{
    res.status(200).json({
        result: null,
        message: 'Get all users',
        meta: null
    });
 }
// create a new user
userCreate = (req,res,nest)=>{
const data = req.body;   // name , email, password,confirmpassword, address, phone



// hash the password
const salt = bcrypt.genSaltSync(10);
data.password = bcrypt.hashSync(data.password,salt);
// data.confirmpassword = bcrypt.hashSync(data.confirmpassword,salt);
// if single files
if(req.file)   // {}
    {
    data.image = req.file.filename;

}

// if multiple files
if(req.files)    // [{},{},{}]
    {
    data.images = req.files.map(file => file.filename);
}

res.status(200).json ({
    result: data,
    message:"User Created Successfully",
    meta: null
})
}

/**
 * This function is used to get a user by id
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {import('express').NextFunction} next 
 * @returns {Promise<void>}
 */
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