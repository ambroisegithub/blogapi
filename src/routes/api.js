// const Authorization = require("../middlewares/Middlewares");
const express = require("express");
const UserController = require("../controllers/userController");
const fileUpload = require("../utils/fileUpload");
const router = express.Router();

router.post(
  "/postBlog",


  fileUpload("./storage/images"),
  UserController.createUser
);
router.get("/GetAll",UserController.allUser);
router.get("/singleblog/:id", UserController.singleUser);
router.post(
  "/updateBlog/:id",


  fileUpload("./storage/images"),
  UserController.updateUser
);
router.delete("/deleteBlog/:id",UserController.deleteUser);
module.exports = router;
