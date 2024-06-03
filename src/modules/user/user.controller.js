class UserController{
   
 getAll = (req,res,next)=>{
    res.json({
        result: null,
        message: 'Get all users',
        meta: null
    });
 }

create = (req,res,nest)=>{
const data = req.body;
}
get = (req,res,next)=>{
    const id = req.params.id;
    res.json({
        result: id,
        message: 'Get user by id',
        meta: null
    });
}    
update = (req,res,next)=>{
    const id = req.params.id;
    const data = req.body;
    res.json({
        result: id,
        message: 'Update user by id',
        meta: null
    });
}
remove = (req,res,next)=>{
    const id = req.params.id;
    res.json({
        result: id,
        message: 'Remove user by id',
        meta: null
    });
}
}

//  create an instance of the controller
const userController = new UserController();



//  exporting the userController object
module.exports = userController