const jwt = require('jsonwebtoken');
const userService = require('../modules/user/user.service');


// creating middlewares for user 


const loginCheck = async (req,res,next) => {
    try {
        let token = req.headers['authorization'] || null;
        if (!token) {
            throw {
                statusCode: 401,
                message: 'Unauthorized,Plese login first',
                detail: null
            }
        }else{
                //bearer token seperation from the token
                token = token.split(' ').pop();    //only token string is extracted
                //token verification    
                const data = jwt.verify(token, process.env.JWT_SECRET);  // got userid from the token

                    console.log("Token data after verification login check",data);
                //data fetch from database 
                //TODO
                let user = await userService.getSingleUserByFilter({id:data.sub});

                console.log("User data after verification login check",user);

                req.authUser = {
                    id:user._id,
                    email:user.email,
                    role:user.role,
                    status:user.status,
                    name:user?.name || null,
                    profile:user?.image || null,
                    phone: user?.phone || null,
                };
            next();
           
        }

    } catch (exception) {
        console.log(exception);
        next({
            statusCode: 401,
            message: exception.message || 'Unauthorized',
            detail: null
        
        });
    }
}

module.exports = {
    loginCheck
}

