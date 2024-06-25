const { loginCheck } = require('../../middlewares/auth.middleware');
const { hasPermission } = require('../../middlewares/rbac.miiddleware');
const { setPath,uploadFile } = require('../../middlewares/uploader.middleware');
const { bodyValidator } = require('../../middlewares/validator.middleware');
const bannerController = require('./banner.controller');
const { BannerCreateDTO, BannerUpdateDTO } = require('./banner.request');

const router = require('express').Router();



// public routes
router.get('/list-home', bannerController.listHome);

router.route('/')
    .get(loginCheck,hasPermission(['admin']))
    .post(loginCheck,hasPermission(['admin']), setPath('banners'),uploadFile().single('image'),bodyValidator(BannerCreateDTO),bannerController.create);

    router.route('/:id')
    .get(loginCheck,hasPermission(['admin']))
    .put(loginCheck,hasPermission(['admin']), setPath('banners'),bodyValidator(BannerUpdateDTO),bannerController.edit)

module.exports = router;