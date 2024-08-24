const { loginCheck } = require('../../middlewares/auth.middleware');
const { hasPermission } = require('../../middlewares/rbac.miiddleware');
const { setPath,uploadFile } = require('../../middlewares/uploader.middleware');
const { bodyValidator } = require('../../middlewares/validator.middleware');
const categoryController = require('./category.controller');
const {  categoryCreateDTO,
    categoryUpdateDTO} = require('./category.request');

const router = require('express').Router();



// public routes
router.get('/list-home', categoryController.listForHome);

router.route('/')
    .get(loginCheck,hasPermission(['admin']))
    .post(loginCheck,hasPermission(['admin']), setPath('categories'),uploadFile().single('image'),bodyValidator(categoryCreateDTO),categoryController.create);

    router.route('/:id')
    .get(loginCheck,hasPermission(['admin']))
    .put(loginCheck,hasPermission(['admin']), setPath('categories'),bodyValidator(categoryUpdateDTO),categoryController.edit)

module.exports = router;