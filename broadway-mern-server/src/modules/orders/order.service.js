const { default: mongoose } = require("mongoose");
const orderModel = require("./order.model");

class OrderService {
  createOrder = async (data) => {
    try {
      const order = new orderModel(data);
      return await order.save();
    } catch (exception) {
      throw exception;
    }
  };

  listData = async (currentPage = 1, limit = 5, filter = {}) => {
    try {
      const skip = (currentPage - 1) * limit;
      const total = await orderModel.countDocuments(filter);
      const totalPages = Math.ceil(total / limit);
      const data = await orderModel
        .find(filter)
        .select(
          "createdAt items totalItems totalAmount orderStatus paymentStatus paymentType"
        )
        .populate({
          path: "items.productId",
          select: "name image",
        })
        .skip(skip)
        .limit(limit)
        .sort({ _id: "desc" });
      return { data, totalPages, total, limit, currentPage };
    } catch (exception) {
      throw exception;
    }
  };
  getDetailByFilter = async (filter) => {
    try {
      const orderDetail = await orderModel.findOne(filter).populate({
        path: "items.productId",
        select: "name image title",
      });
      if (!orderDetail) {
        throw {
          statusCode: 404,
          message: "Order does not exist or has been deleted",
        };
      }
      return orderDetail;
    } catch (exception) {
      throw exception;
    }
  };

  deleteById = async (id) => {
    try {
      const response = await orderModel.findByIdAndDelete(id);
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
      const response = await orderModel.findByIdAndUpdate(id, data, {
        new: true,
      });
      if (!response) {
        throw { statusCode: 404, message: "Order not found" };
      }
      return response;
    } catch (exception) {
      throw exception;
    }
  };
  countProducts = async () => {
    try {
      return await orderModel.countDocuments();
    } catch (exception) {
      throw exception;
    }
  };
  getProductsByUserId = async (userId) => {
    try {
      const products = await orderModel.aggregate([
        {
          $match: {
            userId: new mongoose.Types.ObjectId(userId), // Match orders for the specific user
          },
        },
        {
          $unwind: "$items", // Unwind the items array
        },
        {
          $lookup: {
            from: "products", // Join with the products collection
            localField: "items.productId",
            foreignField: "_id",
            as: "productDetails",
          },
        },
        {
          $unwind: {
            path: "$productDetails",
            preserveNullAndEmptyArrays: true, // Optional: Keep orders without matching products
          },
        },
        {
          $project: {
            productId: "$productDetails._id",
            title: "$productDetails.title",
            image: "$productDetails.image",
            stock: "$productDetails.stock",
            orderedOn: "$createdAt",
            deliveryStatus: "$orderStatus",
          },
        },
        {
          $group: {
            _id: "$productId",
            title: {
              $first: "$title",
            },
            image: {
              $first: "$image",
            },
            stock: {
              $first: "$stock",
            },
            orderedOn: {
              $first: "$orderedOn",
            },
            deliveryStatus: {
              $first: "$deliveryStatus",
            },
            reviewed:{
              $first:false
            }
          },
        },
        {
          $sort: {
            title: 1,
          },
        },
      ]);

      return products; // Return the array of product details
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error; // Handle error as needed
    }
  };
}

const orderService = new OrderService();

module.exports = orderService;
