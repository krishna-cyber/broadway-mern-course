const router = require('express').Router();
const { userCreateDTO } = require('./user.request');

// importing user controller object
const userController = require('./user.controller');
const { bodyValidator } = require('../../middlewares/validator.middleware');



// creating middlewares for user 
const loginCheck = (req,res,next) => {
    console.log('login check middleware');
    next();
}



const hasPermission= (req,res,next) => {
    console.log('has permission middleware');
    next();
}




// router uses logincheck for all the routes
router.use(loginCheck);
// creating routes for user




    router.route('/')
    .get(hasPermission,userController.userLists)
    .post(hasPermission,bodyValidator(userCreateDTO),userController.userCreate);

  router.route('/:id')
    .get(userController.userDetailById)
    .put(userController.userUpdate)
    .delete(userController.userRemove);


module.exports = router;