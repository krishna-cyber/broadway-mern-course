const mongoose = require("mongoose");
const statusType = require("../../config/constants.config");
const { required } = require("joi");

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
    taxAmount:{
      type:Number,
      required:true
    },
    storePickUp:{
      type:Number,
      required:true
    },
    totalItems: {
      type: Number,
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
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
      default: "cash",
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
