const Brandmodel = require("./brand.model");

class BrandService {
  createBrand = async (data) => {
    try {
      const banner = new Brandmodel(data);
      return await banner.save();
    } catch (exception) {
      throw exception;
    }
  };

  listData = async (currentPage,limit,filter={})=>{
    try {
        //calculate skip based on current page and limit
  
        const count = await Brandmodel.countDocuments(filter);
        const skip = (currentPage - 1) * limit;
        const data = await Brandmodel.find(filter).populate('createdBy',["_id","fullName","email","role"]).skip(skip).limit(limit).sort({_id:'desc'});
        let totalPages = Math.ceil(count / limit);
        return {data,count,totalPages};
    } catch (exception) {
        throw exception;
    }
}
  getDetailByFilter = async (filter) => {
    try {
      const bannerDetail = await Brandmodel.findOne(filter).populate(
        "createdBy",
        ["_id", "fullName", "email", "role"]
      );
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

  getDetailById = async ({ _id }) => {
    try {
      const bannerDetail = await Brandmodel.findById(_id).populate(
        "createdBy",
        ["_id", "fullName", "email", "role"]
      );
      if (!bannerDetail) {
        throw { statusCode: 404, message: "Banner not found" };
      }
      return bannerDetail;
    } catch (exception) {
      throw exception;
    }
  };
  listAllBrands = async () => {
    try {
      return await Brandmodel.find({ status: true }, { name: 1 });
    } catch (exception) {
      throw exception;
    }
  };


 
}

const brandService = new BrandService();

module.exports = brandService;
