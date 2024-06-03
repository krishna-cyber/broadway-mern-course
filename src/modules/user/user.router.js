const router = require('express').Router();

// importing user controller object
const userController = require('./user.controller');


// creating routes for user

    router.route('/')
    .get(userController.getAll)
    .post(userController.create);

  router.route('/:id')
    .get(userController.get)
    .put(userController.update)
    .delete(userController.remove);


module.exports = router;