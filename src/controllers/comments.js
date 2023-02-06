var Router = require("express");
var router = Router();
var Blog = require("../models/User1.js");
const mongoose = require("mongoose");
router.post("/blogs/:blogId", async (req, res) => {
  const blogId = req.params.blogId;

  try {
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    const comment = {
      text: req.body.text,
      author: req.body.author,
    };

    blog.comments.push(comment);
    const savedBlog = await blog.save();

    return res.status(201).json(savedBlog);
  } catch (err) {
    return res.status(500).json({ message:'THERE IS ERROR'});
    // return res.status(500).json({ message: err.message });
  }
});
module.exports=router