const Brandmodel = require("./brand.model");

class BannerService {
  createBrand = async (data) => {
    try {
      const banner = new Brandmodel(data);
      return await banner.save();
    } catch (exception) {
      throw exception;
    }
  };

  listData = async ({ skip = 0, filter = {} }) => {
    try {
      const count = await Brandmodel.countDocuments(filter);
      const data = await Brandmodel.find(filter)
        .populate("createdBy", ["_id", "fullName", "email", "role"])
        .skip(skip)
        .sort({ _id: "desc" });
      return { count, data };
    } catch (exception) {
      throw exception;
    }
  };
  getDetailByFilter = async (filter) => {
    try {
      const bannerDetail = await Brandmodel.findOne(filter).populate("createdBy",["_id","fullName","email","role"]);
      if (!bannerDetail) {
        throw { statusCode: 404, message: "Banner not found" };
      }
      return bannerDetail;
    } catch (exception) {
      throw exception;
    }
  };

  deleteById = async (id) => {
    try {
      const response = await Brandmodel.findByIdAndDelete(id);
      if (!response) {
        throw { statusCode: 404, message: "Banner not found" };
      }
      return response;
    } catch (exception) {
      throw exception;
    }
  };
  updateById = async (id, data) => {
    try {
      const response = await Brandmodel.findByIdAndUpdate(id, data, {
        new: true,
      });
      if (!response) {
        throw { statusCode: 404, message: "Banner not found" };
      }
      return response;
    } catch (exception) {
      throw exception;
    }
  };

  getDetailById = async ({_id}) => {
    try {
      const bannerDetail = await Brandmodel.findById(_id).populate("createdBy",["_id","fullName","email","role"]);
      if (!bannerDetail) {
        throw { statusCode: 404, message: "Banner not found" };
      }
      return bannerDetail;
    } catch (exception) {
      throw exception;
    }
  };

}

const bannerService = new BannerService();

module.exports = bannerService;
