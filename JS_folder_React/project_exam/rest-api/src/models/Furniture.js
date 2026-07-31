const mongoose = require("mongoose");

const furnitureSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: [4, "Name should be at least 4 characters long."],
  },
  category: {
    type: String,
    required: true,
    minLength: [4, "Category should be at least 4 characters long."],
  },
  year: {
    type: Number,
    required: true,
    min: [1900, "Year should be between 1900 and 2024"],
    max: [2024, "Year should be between 1900 and 2024"],
  },
  materials: {
    type: String,
    required: true,
    minLength: [10, "Materials should be at least 10 characters long."],
  },
  color: {
    type: String,
    required: true,
    minLength: [4, "Color should be at least 4 characters long."],
  },
  size: {
    type: String,
    required: true,
    minLength: [4, "Size should be at least 4 characters long."],
  },
  weight: {
    type: String,
    required: true,
    minLength: [4, "Weight should be at least 4 characters long."],
  },
  condition: {
    type: String,
    required: true,
    minLength: [6, "Condition should be at least 6 characters long."],
  },
  imageUrl: {
    type: Array,
    required: true,
    // match: [/^https?:\/\//, 'Image URL should stars with http://... or https://...']
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price should be a positive number."],
  },
  description: {
    type: String,
    required: true,
    minLength: [10, "Description should be at least 10 characters long."],
  },
  listUserLikes: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],
  reviews: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Reviews",
    },
  ],
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  createdAt: Date,
});

furnitureSchema.pre("save", function () {
  if (!this.createdAt) {
    this.createdAt = Date.now();
  }
});

const Furniture = mongoose.model("Furniture", furnitureSchema);

module.exports = Furniture;
