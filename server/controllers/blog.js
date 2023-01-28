const Blog = require("../model/Blog");

exports.createBlog = async (req, res) => {
  try {
    const { publisher, title, paragraph, image } = req.body;
    const newBlog = await new Blog({
      publisher,
      title,
      paragraph,
      image,
    }).save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.readAllBlog = async (req, res) => {
  try {
    const readBlogs = await Blog.find();
    res.status(201).json(readBlogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
