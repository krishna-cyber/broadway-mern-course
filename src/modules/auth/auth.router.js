const { hasPermission } = require('../../middlewares/rbac.miiddleware');
const { uploadFile } = require('../../middlewares/uploader.middleware');
const authcontroller = require('./auth.controller');
const {setPath} = require('../../middlewares/uploader.middleware');
const { loginCheck } = require('../../middlewares/auth.middleware');


const authRouter = require('express').Router();


//register user route
authRouter.post('/register',setPath(`user`),uploadFile().single('profile'),authcontroller.registerUser)


authRouter.post('/login',authcontroller.loginUser);

authRouter.get('/me',loginCheck,authcontroller.getUser);



authRouter.get('/activate/:token',authcontroller.activateUser);

authRouter.get('/resend-activation-token/:token ',hasPermission(['admin','seller']),(req,res,next)=>{})




module.exports = authRouter
;