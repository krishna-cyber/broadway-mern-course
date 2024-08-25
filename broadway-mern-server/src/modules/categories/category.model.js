const { ref } = require("joi");
const mongoose = require("mongoose");
const statusType = require("../../config/constants.config");

// Function to generate a slug from a string
const generateSlug = (name) => {
  return name
    .toLowerCase() // Convert to lowercase
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
    .trim() // Trim whitespace
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-"); // Replace multiple hyphens with a single hyphen
};

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true, // Ensures category names are unique
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    parentCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category", // Reference to another category for subcategories
      default: null,
    },
    slug: {
      type: String,
      unique: true, // URL-friendly version of the category name
      lowercase: true,
      trim: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
    autoCreate: true,
    autoIndex: true,
  }
);
// Pre-save middleware to generate the slug
categorySchema.pre('save', function (next) {
  // Generate slug from the name
  this.slug = generateSlug(this.name);
  next();
});


const CategoryModel = mongoose.model("Category", categorySchema);

module.exports = CategoryModel;
