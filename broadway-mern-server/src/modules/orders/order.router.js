const { loginCheck } = require('../../middlewares/auth.middleware');
const { hasPermission } = require('../../middlewares/rbac.miiddleware');
const { setPath,uploadFile } = require('../../middlewares/uploader.middleware');
const { bodyValidator } = require('../../middlewares/validator.middleware');
const { orderCreateDTO } = require('./order.request')
const orderController = require('./order.controller');

const router = require('express').Router();





router.route('/')
    .get(loginCheck,hasPermission(['admin','customer']),orderController.listForTable)
    .post(loginCheck,hasPermission(['customer']), bodyValidator(orderCreateDTO),orderController.createOrder);

    router.get('/products/:userId',loginCheck,hasPermission(['admin','customer']),orderController.orderedUserProducts)

    router.route('/:id')
    .get(loginCheck,hasPermission(['customer','admin']),orderController.overviewOrder)
    .patch(loginCheck,hasPermission(['admin']),orderController.processOrder)

module.exports = router;