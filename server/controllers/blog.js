const Blog = require('../model/Blog');

exports.createBlog = async (req, res) => {
    try {
        const { publisher, title, paragraph, image, userId } = req.body;
        const newBlog = await new Blog({
            publisher,
            title,
            paragraph,
            image,
            userId,
        }).save();
        res.status(201).json(newBlog);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.readAllBlog = async (req, res) => {
    try {
        const readBlogs = await Blog.find();
        res.status(200).json(readBlogs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.readBlog = async (req, res) => {
    try {
        const { userId } = req.params;
        const readBlog = await Blog.find({ userId: userId });
        res.status(200).json(readBlog);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteAllBlog = async (req, res) => {
    try {
        const { userId } = req.params;
        await Blog.deleteMany({ userId });
        res.status(200).json('Success');
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
