const Authorization = require("../middlewares/Middlewares");
const express = require("express");
const UserController = require("../controllers/UserController");
const fileUpload = require("../utils/fileUpload");
const router = express.Router();

router.post(
  "/postBlog",


  fileUpload("./storage/images"),
  UserController.createUser
);
router.get("/GetAll", Authorization, UserController.allUser);
router.get("/singleblog/:id", Authorization, UserController.singleUser);
router.post(
  "/updateBlog/:id",
  Authorization,

  fileUpload("./storage/images"),
  UserController.updateUser
);
router.delete("/deleteBlog/:id", Authorization, UserController.deleteUser);

// router.post("/comment/:id", UserController.commentBlogs);

module.exports = router;
