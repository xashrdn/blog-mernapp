const express = require("express");
const {
  createBlog,
  readAllBlog,
  readBlog,
  deleteAllBlog,
} = require("../controllers/blog");
const router = express.Router();

router.post("/blog", createBlog);
router.get("/blogs", readAllBlog);
router.get("/blog/:userId", readBlog);
router.delete("/blogs/:userId", deleteAllBlog);

module.exports = router;
