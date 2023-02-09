const express = require("express");
const User = require("../models/user1");
const Comment = require("../models/comment.model");

const router = express.Router();

router.post("/comment/:id", async (req, res) => {
  console.log(req.params.id);
  const _id = req.params.id;

  try {
    const blog = await User.findById(_id);
    if (!blog)
      return res.status(404).json({
        message: "blog not found",
      });

    //   const comment  =  new Comment({
    //     author:req.body.author,
    //     text:req.body.text,
    //   })
    //   console.log(comment);
      blog.comments.push(req.body);
      await blog.save();

    return res.json({
      message:"Comment posted successfully",
      blog,
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
});

module.exports = router;
