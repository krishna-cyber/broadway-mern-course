const { loginCheck } = require('../../middlewares/auth.middleware');
const { hasPermission } = require('../../middlewares/rbac.miiddleware');
const { setPath,uploadFile } = require('../../middlewares/uploader.middleware');
const { bodyValidator } = require('../../middlewares/validator.middleware');
const categoryController = require('./category.controller');
const {  categoryCreateDTO,
    categoryUpdateDTO} = require('./category.request');
const categoryService = require('./category.service');

const router = require('express').Router();



// public routes
router.get('/list-home', categoryController.listForHome);

router.route('/')
    .get(loginCheck,hasPermission(['admin','seller']),categoryController.listForDashboard)
    .post(loginCheck,hasPermission(['admin']), setPath('icons'),uploadFile().single('image'),bodyValidator(categoryCreateDTO),categoryController.create);
    
    router.route('/:id')
    .get(loginCheck,hasPermission(['admin']))
    .delete(loginCheck,hasPermission(['admin']),categoryController.delete)
    .put(loginCheck,hasPermission(['admin']), setPath('icons'),bodyValidator(categoryUpdateDTO),categoryController.edit)
    
    router.get('/lists',loginCheck,hasPermission(['admin','seller']),categoryController.list)



module.exports = router;