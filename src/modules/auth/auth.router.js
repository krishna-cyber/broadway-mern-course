const { hasPermission } = require('../../middlewares/rbac.miiddleware');

const authRouter = require('express').Router();


//register user route
authRouter.post('/register',(req,res,next)=>{
    const {userName,password,email}= req.body;
    res.status(200).json({
        result:{userName,password,email},
        message:"User registered successfully",
        meta:null
    })
})


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