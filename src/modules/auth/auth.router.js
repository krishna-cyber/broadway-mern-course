const authRouter = require('express').Router();


authRouter.post('/login',(req,res,next)=>{
    const {userName,password}= req.body;
    res.status(200).json({
        result:{userName,password},
        message:"User login successfully",
        meta:null
    })
})

authRouter.get('/activate/:token',(req,res,next)=>{})


module.exports = authRouter;