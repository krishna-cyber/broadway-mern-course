const { loginCheck } = require("../../middlewares/auth.middleware");
const { hasPermission } = require("../../middlewares/rbac.miiddleware");
const {
  setPath,
  uploadFile,
} = require("../../middlewares/uploader.middleware");
const { bodyValidator } = require("../../middlewares/validator.middleware");
const brandController = require("./brand.controller");
const { brandCreateDTO, brandUpdateDTO } = require("./brand.request");

const router = require("express").Router();

// public routes
router.get("/list-home", brandController.listForHome);

router
  .route("/")
  .get(
    loginCheck,
    hasPermission(["admin", "seller"]),
    brandController.listForDashboard
  )
  .post(
    loginCheck,
    hasPermission(["admin", "seller"]),
    setPath("brands"),
    uploadFile().single("image"),
    bodyValidator(brandCreateDTO),
    brandController.create
  );

router
  .route("/:id")
  .get(loginCheck, hasPermission(["admin", "seller"]), brandController.getById)
  .patch(
    loginCheck,
    hasPermission(["admin", "seller"]),
    uploadFile().single("image"),
    setPath("brands"),
    bodyValidator(brandUpdateDTO),
    brandController.edit
  )
  .delete(
    loginCheck,
    hasPermission(["admin", "seller"]),
    brandController.deleteBrandById
  );


  
module.exports = router;
