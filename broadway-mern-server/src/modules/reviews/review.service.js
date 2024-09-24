const { default: mongoose } = require("mongoose");
const ReviewModel = require("./review.model");

class ReviewService {
  createReview = async (data) => {
    try {
      const banner = new ReviewModel(data);
      return await banner.save();
    } catch (exception) {
      throw exception;
    }
  };

  listData = async ({
    page = 1,
    pageSize = 10,
    filter = {},
    listFor = "user",
  }) => {
    try {
      //calculate skip based on current page and limit
      const count = await ReviewModel.countDocuments(filter);
      const skip = (page - 1) * pageSize;

      if (listFor === "product") {
        var data = await ReviewModel.find(filter, )
          .populate("reviewedFor", ["_id", "title"]).populate("reviewedBy", ["_id", "fullName", "email", ])
          .skip(skip)
          .limit(pageSize)
          .sort({ _id: "desc" });
      } else {
        var data = await ReviewModel.find(filter, "-reviewedBy")
          .populate("reviewedFor", ["_id", "title"])
          .skip(skip)
          .limit(pageSize)
          .sort({ _id: "desc" });
      }

      let totalPages = Math.ceil(count / pageSize);
      const hasMore = skip + pageSize < count;
      return { data, count, totalPages, hasMore };
    } catch (exception) {
      throw exception;
    }
  };
  getDetailByFilter = async (filter) => {
    try {
      const bannerDetail = await ReviewModel.findOne(filter).populate(
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
      const response = await ReviewModel.findByIdAndDelete(id);
      if (!response) {
        throw { statusCode: 404, message: "Review not found" };
      }
      return response;
    } catch (exception) {
      throw exception;
    }
  };
  updateById = async (id, data) => {
    try {
      const response = await ReviewModel.findByIdAndUpdate(id, data, {
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
      const bannerDetail = await ReviewModel.findById(_id).populate(
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
      return await ReviewModel.find({ status: true }, { name: 1 });
    } catch (exception) {
      throw exception;
    }
  };

  checkPermissionForReview = async (authUser) => {
    try {
      if (!authUser) {
        throw { statusCode: 401, message: "Unauthorized" };
      }
      return true;
    } catch (exception) {
      throw exception;
    }
  };
  countReviews = async (id) => {
    try {
      return await ReviewModel.countDocuments({ reviewedFor: id });
    } catch (error) {
      throw error;
    }
  };
}

const reviewService = new ReviewService();

module.exports = reviewService;
