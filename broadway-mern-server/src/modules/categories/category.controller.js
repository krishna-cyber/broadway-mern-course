const { uploadImage } = require("../../config/cloudinary.config");
const { deleteFile } = require("../../utils/helper");
const categoryService = require("./category.service");

class CategoryController {
  categoryId;
  create = async (req, res, next) => {
    try {
      const data = req.body;
      const {path} = req.file;

      data.image = path.replace('public\\','');
      data.createdBy = req.authUser.id;

      const response = await categoryService.createCategory(data);
      res.json({
        result: response,
        message: "Category added successfully",
        meta: null,
      });
    } catch (exception) {
      // cloudinary delete image also

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
      const bannerDetail = await categoryService.getDetailByFilter({ _id: id });
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
          `./public/uploads/categories/${image.filename}`
        );
        data.image = imageUrl;
        deleteFile(`./public/uploads/categories/${image.filename}`);
      }
      const response = await categoryService.updateById(id, data);
      res.json({
        result: response,
        message: "Banner updated successfully",
        meta: null,
      });
    } catch (exception) {}
  };
  delete = async (req, res, next) => {
    try {
      const { id } = req.params;
      await categoryService.deleteById(id);
      res.json({
        result: null,
        message: `Category deleted successfully`,
        meta: null,
      });
    } catch (error) {
      console.log(`Error at category delete middleware or function`, error);
      next(error);
    }
  };
  listForHome = async (req, res, next) => {
    try {
      const { data, meta } = await categoryService.listData();

      res.json({
        result: data,
        message: "List of banners",
        meta: meta,
      });
    } catch (exception) {
      next(exception);
    }
  };
  listForDashboard = async (req, res, next) => {
    try {
      const { role } = req.authUser;

      const { page, limit } = req.query;
      if (role === "seller") {
        const { data, meta } = await categoryService.listData(page, limit, {
          createdBy: req.authUser.id,
        });

        res.json({
          result: data,
          message: "List of category",
          meta: meta,
        });
      }
      const { data, meta } = await categoryService.listData(page,limit);
  
        res.json({
          result: data,
          message: "List of category",
          meta: meta,
        });
    } catch (exception) {
      next(exception);
    }
  };
  list = async (req,res,next)=>{
    try {
     
      const  result  = await categoryService.listAll();
  
        res.json({
          result,
          message: "All categories",
          meta: null,
        });

    } catch (error) {
     next(error) 
    }
  }
}

// create object of categoryController
const categoryController = new CategoryController();

module.exports = categoryController;
