const { uploadImage } = require("../../config/cloudinary.config");
const { deleteFile } = require("../../utils/helper");
const orderService = require("./order.service");

class OrderController {
  productId;
  createOrder = async (req, res, next) => {
    try {
      const data = req.body;
     
      data.userId = req.authUser.id;
    
      const response = await orderService.createOrder(data);
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
    const {page,limit }= req.query;
    try {
      if(req.authUser.role === 'customer'){
        const {data,totalPages,total,currentPage} = await orderService.listData(page,limit,{userId:req.authUser.id});
        return res.json({
          result: data,
          message: "List of orders",
          meta: {
            total,
            currentPage,
            totalPages,
            limit
          },
        });
      }
      
      const {data,totalPages,total,currentPage} = await orderService.listData(page,limit);
      res.json({
        result: data,
        message: "List of orders",
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
      const {data,totalPages} = await orderService.listData({ page, filter, pageSize: limit });
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
      const productDetail = await orderService.getDetailByFilter({ _id: id });
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
      const response = await orderService.updateById(id, data);
      res.json({
        result: response,
        message: "product updated successfully",
        meta: null,
      });
    } catch (exception) {}
  };
  deleteProduct = async (req, res, next) => {
    //delete product by id
    //also delete image from cloudinary
    //response result response meta null messge product deleted successfully
  };
  listForHome = async (req, res, next) => {
    try {
      const {data,totalPages} = await orderService.listData({
        pageSize: 10,
        filter: { status: 'ACTIVE' },
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
  countProducts = async (req, res, next) => {
    try {
      const count = await orderService.countProducts({});
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

// create object of OrderController
const orderController = new OrderController();

module.exports = orderController;
