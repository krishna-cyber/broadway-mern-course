const { loginCheck } = require("../../middlewares/auth.middleware");
const { hasPermission } = require("../../middlewares/rbac.miiddleware");
const {
  setPath,
  uploadFile,
} = require("../../middlewares/uploader.middleware");
const { bodyValidator } = require("../../middlewares/validator.middleware");
const reviewController = require("./review.controller");
const { reviewCreateDTO } = require("./review.request");

const router = require("express").Router();

//count total reviews of a product
router.get("/count", reviewController.countReviewsForProduct);

router
  .route("/")
  .get(
    loginCheck,
    hasPermission(["admin", "seller"]),
    reviewController.listReviewsForProduct
  )
  .post(
    loginCheck,
    hasPermission(["customer"]),
    setPath("reviews"),
    uploadFile().single("image[]"),
    bodyValidator(reviewCreateDTO),
    reviewController.createReview
  );

router.get("/product/:id", reviewController.listReviewsForProduct);

router.get("/user/:id", reviewController.listReviewsForUser);

router
  .route("/:id")
  .delete(
    loginCheck,
    hasPermission(["admin", "customer"]),
    reviewController.deleteReview
  );

module.exports = router;
