const { loginCheck } = require('../../middlewares/auth.middleware');
const { hasPermission } = require('../../middlewares/rbac.miiddleware');
const { setPath,uploadFile } = require('../../middlewares/uploader.middleware');
const { bodyValidator } = require('../../middlewares/validator.middleware');
const brandController = require('./brand.controller');
const { brandCreateDTO, brandUpdateDTO } = require('./brand.request');

const router = require('express').Router();



// public routes
router.get('/list-home', brandController.listForHome);

router.route('/')
    .get(loginCheck,hasPermission(['admin','seller']),brandController.listForDashboard)
    .post(loginCheck,hasPermission(['admin']), setPath('brands'),uploadFile().single('image'),bodyValidator(brandCreateDTO),brandController.create);

    router.route('/:id')
    .get(loginCheck,hasPermission(['admin']),brandController.getById)
    .put(loginCheck,hasPermission(['admin']), setPath('brands'),bodyValidator(brandUpdateDTO),brandController.edit)
    .delete(loginCheck,hasPermission(['admin']),brandController.deleteBrandById);
module.exports = router;