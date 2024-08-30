const mongoose = require("mongoose");
const statusType = require("../../config/constants.config");

const OrderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        productId: {
          type: mongoose.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    totalItems: {
      type: Number,
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    shippingAddress: {
      state: {
        type: String,
        required: true,
      },
      district: {
        type: String,
        required: true,
      },
      muncipality: {
        type: String,
        required: true,
      },
      wardNo: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
    },
    orderStatus: {
      type: String,
      enum: ["confirmed", "shipped", "delivered", "cancelled"],
      default: "confirmed",
    },
    paymentStatus: {
      type: String,
      enum: ["paid", "unpaid"],
      default: "unpaid",
    },
    paymentType: {
      type: String,
      enum: ["cash", "card", "eSewa", "Khalti"],
    },
  },
  {
    timestamps: true,
    autoCreate: true,
    autoIndex: true,
  }
);

const orderModel = mongoose.model("Order", OrderSchema);

module.exports = orderModel;
