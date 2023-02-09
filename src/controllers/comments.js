var Router = require("express");
var router = Router();
var User = require("../models/user1.js");
const mongoose = require("mongoose");
router.post("/blogs/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const blog = await User.findById(id);
  } catch (err) {
     return res.status(500).json({ message: err.message });
  }
});
module.exports=router