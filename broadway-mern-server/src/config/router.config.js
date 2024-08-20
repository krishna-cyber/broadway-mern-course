const router = require('express').Router();


// import routes
const userRouter = require("../modules/user/user.router");
const authRouter = require("../modules/auth/auth.router");
const bannerRouter = require("../modules/banners/banner.router");
const productRouter = require("../modules/products/product.router");


router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/banner', bannerRouter);
router.use('/product', productRouter);

module.exports = router;