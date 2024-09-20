const { loginCheck } = require("../../middlewares/auth.middleware");
const { hasPermission } = require("../../middlewares/rbac.miiddleware");
const {
  setPath,
  uploadFile,
} = require("../../middlewares/uploader.middleware");
const { bodyValidator } = require("../../middlewares/validator.middleware");
const { reviewCreateDTO } = require("./product.request");
const reviewController = require("./review.controller");

const router = require("express").Router();

//count total reviews of a product
router.get("/count", reviewController.countReviews);

// protected routes

router
  .route("/")
  .get(
    loginCheck,
    hasPermission(["admin", "seller"]),
    reviewController.listForTable
  )
  .post(
    loginCheck,
    hasPermission(["admin", "seller"]),
    setPath("products"),
    uploadFile().single("image"),
    bodyValidator(reviewCreateDTO),
    reviewController.createProduct
  );

  router.get("/product/:id", reviewController.listReviewByProduct);

router.delete(
  "/:id",
  loginCheck,
  hasPermission(["admin", "seller"]),
  reviewController.deleteReview
);

module.exports = router;
