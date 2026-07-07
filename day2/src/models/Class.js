const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    section: {
      type: String,
      required: true,
      uppercase: true
    },
    teacher: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Class", ClassSchema);