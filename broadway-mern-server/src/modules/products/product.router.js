const { loginCheck } = require('../../middlewares/auth.middleware');
const { hasPermission } = require('../../middlewares/rbac.miiddleware');
const { setPath,uploadFile } = require('../../middlewares/uploader.middleware');
const { bodyValidator } = require('../../middlewares/validator.middleware');
const { productCreateDTO, productUpdateDTO } = require('./product.request')
const productController = require('./product.controller');

const router = require('express').Router();



// public routes
router.get('/list-home', productController.listForHome);

// count of products
router.get('/count',productController.countProducts);

// protected routes

router.route('/')
    .get(loginCheck,hasPermission(['admin','seller']),productController.listForTable)
    .post(loginCheck,hasPermission(['admin','seller']), setPath('products'),uploadFile().single('image'),bodyValidator(productCreateDTO),productController.createProduct);

    router.route('/:product')
    .get(productController.viewProduct)
    .patch(loginCheck,hasPermission(['admin','seller']), setPath('banners'),bodyValidator(productUpdateDTO),productController.editProduct)
    .delete(loginCheck,hasPermission(['admin','seller']),productController.deleteProduct);

module.exports = router;