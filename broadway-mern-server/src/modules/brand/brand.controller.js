const { uploadImage } = require("../../config/cloudinary.config");
const { deleteFile } = require("../../utils/helper");
const brandService = require("./brand.service");

class BrandController {
  bannerId;
  create = async (req, res, next) => {
    try {
      const data = req.body;
      const image = req.file;
      //uploadimage and more
      const imageUrl = await uploadImage(
        `./public/uploads/banner/${image.filename}`
      );
      data.image = imageUrl;
      deleteFile(`./public/uploads/banner/${image.filename}`);

      const response = await brandService.crateBanner(data);
      console.log(response);
      res.json({
        result: response,
        message: "Banner created successfully",
        meta: null,
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
      this.bannerId = id;
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
    } catch (exception) {
      next(exception);
    }
  };
  view = async (req, res, next) => {
    try {
      const id = req.params.id;
      if (!id) {
        throw { statusCode: 400, message: "Id is required" };
      }
      const bannerDetail = await brandService.getDetailByFilter({ _id: id });
      if (!bannerDetail) {
        throw { statusCode: 404, message: "Banner not found" };
      }
      res.status(200).json({
        result: bannerDetail,
        message: "Banner detail",
        meta: null,
      });
    } catch (exception) {
      next(exception);
    }
  };
  edit = async (req, res, next) => {
    // get banner by id , validate and update banner details
    try {
      const id = req.params.id;
      if (!id) {
        throw { statusCode: 400, message: "Id is required" };
      }
      const data = req.body;
      const image = req.file;

      if (image) {
        const imageUrl = await uploadImage(
          `./public/uploads/banner/${image.filename}`
        );
        data.image = imageUrl;
        deleteFile(`./public/uploads/banner/${image.filename}`);
      }
      const response = await brandService.updateById(id, data);
      res.json({
        result: response,
        message: "Banner updated successfully",
        meta: null,
      });
    } catch (exception) {}
  };
  delete = async (req, res, next) => {
    //delete banner by id
    //also delete image from cloudinary
    //response result response meta null messge banner deleted successfully
  };
  listForHome = async (req, res, next) => {
    try {
      const list = await brandService.listData({
        limit: 5,
        filter: { status: true },
      });

      res.json({
        result: list,
        message: "List of banners",
        meta: null,
      });
    } catch (exception) {
      next(exception);
    }
  };
  listForDashboard = async (req, res, next) => {
    try {
      const {count,data} = await brandService.listData({
        limit: 10,
        filter:{},
      });

      res.json({
        result: data,
        message: "List of brands",
        meta: {
          total:count,
          currentPage:1,
          totalPages:0

        },
      });
    } catch (exception) {
      next(exception);
    }
  };
  getById = async (req, res, next) => {
    try {
      const id = req.params.id;
      if (!id) {
        throw { statusCode: 400, message: "Id is required" };
      }
      const bannerDetail = await brandService.getDetailById({ _id: id });
      if (!bannerDetail) {
        throw { statusCode: 404, message: "Banner not found" };
      }
      res.status(200).json({
        result: bannerDetail,
        message: "Banner detail",
        meta: null,
      });
    } catch (exception) {
      next(exception);
    }
  };
}

// create object of brandController
const brandController = new BrandController();

module.exports = brandController;
