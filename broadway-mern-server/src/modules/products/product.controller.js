const { uploadImage } = require("../../config/cloudinary.config");
const { userRoles } = require("../../config/constants.config");
const { deleteFile } = require("../../utils/helper");
const productService = require("./product.service");

class ProductController {
  productId;
  createProduct = async (req, res, next) => {
    try {
      const data = req.body;
      const image = req.file;
      //uploadimage and more
      const imageUrl = await uploadImage(
        `./public/uploads/products/${image.filename}`
      );
      data.image = imageUrl;
      data.createdBy = req.authUser.id;
      deleteFile(`./public/uploads/products/${image.filename}`);
      const response = await productService.createProduct(data);
      res.json({
        result: response,
        message: "product created successfully",
        meta: null,
      });
    } catch (exception) {
      console.log(`Error in createProduct ${exception}`);
      next(exception);
    }
  };
  listForTable = async (req, res, next) => {
    try {
      const {page,limit }= req.query;

      if (req.authUser.role === userRoles.SELLER) {
        const {data,totalPages,total,currentPage} = await productService.listData(page,limit,{createdBy:req.authUser.id});
        return res.json({
          result: data,
          message: "List of products",
          meta: {
            total,
            currentPage,
            totalPages,
            limit
          },
        });
      }
      const {data,totalPages,total,currentPage} = await productService.listData(page,limit);
      res.json({
        result: data,
        message: "List of products",
        meta: {
          total,
          currentPage,
          totalPages,
          limit
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
  index = async (req, res, next) => {
    try {
      // pagination
      const page = +req.query.page || 1;
      const limit = +req.query.limit || 10;

      const skip = (page - 1) * limit;

      let filter = {};
      if (req.query.search) {
        filter = {
          title: { $regex: req.query.search, $options: "i" },
        };
      }
      const {data,totalPages} = await productService.listData({ page, filter, pageSize: limit });
      res.json
      ({
        result: data,
        message: "List of products",
        meta: {
          page,
          pageSize: limit,
          totalPages
        },
      });
    } catch (exception) {
      next(exception);
    }
  };
  viewProduct = async (req, res, next) => {
    try {
      const id = req.params.id;
      if (!id) {
        throw { statusCode: 400, message: "Id is required" };
      }
      const productDetail = await productService.getDetailByFilter({ _id: id });
      if (!productDetail) {
        throw { statusCode: 404, message: "product not found" };
      }
      res.status(200).json({
        result: productDetail,
        message: "Product detail",
        meta: null,
      });
    } catch (exception) {
      next(exception);
    }
  };
  editProduct = async (req, res, next) => {
    // get product by id , validate and update product details
    try {
      const id = req.params.id;
      if (!id) {
        throw { statusCode: 400, message: "Id is required" };
      }
      const data = req.body;
      const image = req.file;

      if (image) {
        const imageUrl = await uploadImage(
          `./public/uploads/product/${image.filename}`
        );
        data.image = imageUrl;
        deleteFile(`./public/uploads/product/${image.filename}`);
      }
      const response = await productService.updateById(id, data);
      res.json({
        result: response,
        message: "product updated successfully",
        meta: null,
      });
    } catch (exception) {
      next(exception);
    }
  };
  deleteProduct = async (req, res, next) => {
 try {
  const {id} = req.params;
  await productService.deleteById(id);
  res.json({
    result:null,
    message:"product deleted successfully",
    meta:null
  });
 } catch (error) {
  next(error);
 }
  };
  listForHome = async (req, res, next) => {
    try {
      const page = +req.query.page || 1;
      const limit = +req.query.limit || 8;
      console.log(page,limit);
      const {result,hasMore} = await productService.landingPageData(page,limit,{status:"ACTIVE"});
      res.json({
        result,
        hasMore
      });
    } catch (exception) {
      next(exception);
    }
  };
  countProducts = async (req, res, next) => {
    try {
      const count = await productService.countProducts({});
      res.json({
        result: count,
        message: "Total products",
        meta: null,
      });
    } catch (error) {
      next(error);
    }
  };
}

// create object of productController
const productController = new ProductController();

module.exports = productController;
