const { loginCheck } = require('../../middlewares/auth.middleware');
const { hasPermission } = require('../../middlewares/rbac.miiddleware');
const { setPath,uploadFile } = require('../../middlewares/uploader.middleware');
const { bodyValidator } = require('../../middlewares/validator.middleware');
const bannerController = require('./banner.controller');
const { BannerCreateDTO, BannerUpdateDTO } = require('./banner.request');

const router = require('express').Router();



// public routes
router.get('/list-home', bannerController.listForHome);

router.route('/')
.get(loginCheck,hasPermission(['admin']),bannerController.getAllBanners)
    // .get(bannerController.getAllBanners)
    .post(loginCheck,hasPermission(['admin']), setPath('banners'),uploadFile().single('image'),bodyValidator(BannerCreateDTO),bannerController.create);

    router.route('/:id')
    .get(loginCheck,hasPermission(['admin']),bannerController.getSingleBannerById)
    .put(loginCheck,hasPermission(['admin']), setPath('banners'),bodyValidator(BannerUpdateDTO),bannerController.updateSingleBannerById)
    .delete(loginCheck,hasPermission(['admin']),bannerController.deleteSingleBannerById);

module.exports = router;