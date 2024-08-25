const mongoose = require("mongoose");
const statusType = require("../../config/constants.config");

const reviewSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      default: null,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },

    reviewedFor: {
      type: mongoose.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    reviewedBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      default: null,
    },
  },
  {
    timestamps: true,
    autoCreate: true,
    autoIndex: true,
  }
);

reviewSchema.index({ reviewedFor: 1, reviewedBy: 1 }, { unique: true });

const ReviewModel = mongoose.model("Review", reviewSchema);

module.exports = ReviewModel;
