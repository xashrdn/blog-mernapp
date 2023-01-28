const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    publisher: {
      type: String,
      required: true,
      minlength: 2,
      maxlenth: 50,
    },
    title: {
      type: String,
      required: true,
      minlength: 2,
      maxlenth: 20,
    },
    paragraph: {
      type: String,
      required: true,
      minlength: 200,
      maxlenth: 600,
      unique: true,
    },
    image: {
      type: String,
      required: true,
      min: 5,
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", BlogSchema);
module.exports = Blog;
