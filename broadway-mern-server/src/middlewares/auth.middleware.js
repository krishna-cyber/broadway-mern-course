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

              
                //TODO
                let user = await userService.getSingleUserByFilter({id:data.sub});


                req.authUser = {
                    id:user._id,
                    email:user.email,
                    role:user.role,
                    status:user.status,
                    fullName:user?.fullName || null,
                    profile:user?.image || null,
                    phone: user?.phone || null,
                };
            next();
           
        }

    } catch (exception) {
        console.log('Exception in login check middleware', exception);
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

