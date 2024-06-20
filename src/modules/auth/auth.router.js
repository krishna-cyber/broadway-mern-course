const { hasPermission } = require('../../middlewares/rbac.miiddleware');
const { uploadFile } = require('../../middlewares/uploader.middleware');
const authcontroller = require('./auth.controller');
const {setPath} = require('../../middlewares/uploader.middleware')


const authRouter = require('express').Router();


//register user route
authRouter.post('/register',setPath(`user`),uploadFile().single('profile'),authcontroller.registerUser)


authRouter.post('/login',(req,res,next)=>{
    const {userName,password}= req.body;
    res.status(200).json({
        result:{userName,password},
        message:"User login successfully",
        meta:null
    })
})



authRouter.get('/activate/:token',(req,res,next)=>{})

authRouter.get('/resend-activation-token ',hasPermission(['admin','seller']),(req,res,next)=>{})




module.exports = authRouter
;