const { loginCheck } = require('../../middlewares/auth.middleware');
const { hasPermission } = require('../../middlewares/rbac.miiddleware');
const { setPath,uploadFile } = require('../../middlewares/uploader.middleware');
const { bodyValidator } = require('../../middlewares/validator.middleware');
const { orderCreateDTO, orderUpdateDTO } = require('./order.request')
const orderController = require('./order.controller');

const router = require('express').Router();



// public routes
router.get('/list-home', orderController.listForHome);

// count of products
router.get('/count',orderController.countProducts);

// protected routes

router.route('/')
    .get(loginCheck,hasPermission(['admin','customer']),orderController.listForTable)
    .post(loginCheck,hasPermission(['customer']), bodyValidator(orderCreateDTO),orderController.createOrder);

    router.route('/:id')
    .get(loginCheck,hasPermission(['customer','admin']),orderController.overviewOrder)
    .put(loginCheck,hasPermission(['admin','seller']), setPath('banners'),bodyValidator(orderUpdateDTO),orderController.editProduct)
    .delete(loginCheck,hasPermission(['admin','seller']),orderController.deleteProduct);

module.exports = router;