const { uploadImage } = require("../../config/cloudinary.config");
const { deleteFile } = require("../../utils/helper");
const reviewService = require("./review.service");

class ReviewController {
  productId;
  createReview = async (req, res, next) => {
    try {
      
      const data = req.body;
      const image = req.file;
      //uploadimage and more

      if (image){

        const imageUrl = await uploadImage(
          `./public/uploads/${req.uploadPath}/${image.filename}`
        );
        data.image = imageUrl;
        deleteFile(`./public/uploads/${req.uploadPath}/${image.filename}`);
      }
      data.reviewedBy = req.authUser.id;

      const response = await reviewService.createReview(data);
      console.log(response);
      res.json({
        result: response,
        message: "Reviewed successfully",
        meta: null,
      });
    } catch (exception) {
      console.log(`Error in createReview ${exception}`);
      next(exception);
    }
  };
  listReviewsForProduct = async (req, res, next) => {

    try {
      const {currentPage,pageSize }= req.query;
      const {data,totalPages} = await reviewService.listData({
        pageSize: pageSize || 10,
        page:currentPage ,
        filter: {},
      });
      res.json({
        result: data,
        message: "List of products",
        meta: {
          page: 1,
          pageSize: 10,
          totalPages
        },
      });
    } catch (exception) {
      next(exception);
    }
  };
  #validateId = async (req, res, next) => {
    try {
      const id = req.params.id;
      if (!id) {
        throw { statusCode: 400, message: "Id is required" };
      }
      this.productId = id;
      next();
    } catch (exception) {
      next(exception);
    }
  };



  deleteReview = async (req, res, next) => {
 try {
  const id = req.params.id;
  const response = await reviewService.deleteById(id);
  res.json({
    result: null,
    message: "Review deleted successfully",
    meta: null,
  });
  
 } catch (error) {
  next(error);
 }
  };

  countReviewsForProduct = async (req, res, next) => {
    try {
      const count = await reviewService.countReviews({id});
      res.json({
        result: count,
        message: "Total products",
        meta: null,
      });
    } catch (error) {
      next(error);
    }
  };
  checkPermissionForReview = async (req, res, next) => {
    const {productId} = req.query;
    const { authUser } = req;
    try {
      if (!authUser) {
        throw { statusCode: 401, message: "Unauthorized" };
      }
       
      const permission = await reviewService.checkPermission(authUser);

      res.json({
        result: true,
        message: "Permission granted",
        meta: null,
      });
    } catch (exception) {
      next(exception);
    }
  };
  listReviewsForUser = async (req, res, next) => {
      const userId = req.params.id;
    try {
      const {currentPage,pageSize }= req.query;
      console.log(currentPage,pageSize);
      const {data,totalPages} = await reviewService.listData({
        pageSize: pageSize,
        page:currentPage ,
        filter: {reviewedBy:userId},
      });

      res.json({
        result: data,
        message: "List of products",
        meta: {
          page: 1,
          pageSize: 10,
          totalPages
        },
      });
    } catch (error) {
      next(error);
      
    }

  };
}

// create object of ReviewController
const reviewController = new ReviewController();

module.exports = reviewController;
