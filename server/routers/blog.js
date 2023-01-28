const express = require("express");
const { createBlog, readAllBlog } = require("../controllers/blog");
const router = express.Router();

router.post("/blog", createBlog);
router.get("/blogs", readAllBlog);

module.exports = router;
