const router = require('express').Router();


// import routes
const userRouter = require("../modules/user/user.router");
const authRouter = require("../modules/auth/auth.router");
const bannerRouter = require("../modules/banners/banner.router");
const productRouter = require("../modules/products/product.router");
const categoryRouter = require("../modules/categories/category.router")
const brandRouter = require("../modules/brand/brand.router");
const orderRouter = require('../modules/orders/order.router')
const reviewRouter = require(`../modules/reviews/review.router`)


router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/banner', bannerRouter);
router.use('/product', productRouter);
router.use('/category', categoryRouter);
router.use('/brand', brandRouter);
router.use('/order',orderRouter);
router.use('/review',reviewRouter)

module.exports = router;