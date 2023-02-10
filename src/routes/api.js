// const Authorization = require("../middlewares/Middlewares");
const express = require("express");
const UserController = require("../controllers/userController");
const fileUpload = require("../utils/fileUpload");
const router = express.Router();

/**
 * @swagger
 * /postBlog:
 *   post:
 *     description: Create a new blog post with an optional image
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - in: formData
 *         name: image
 *         type: file
 *         required: false
 *         description: Image file to attach to the blog post
 *     responses:
 *       201:
 *         description: Blog post created successfully
 *       400:
 *         description: Bad Request
 */
router.post(
  "/postBlog",
  fileUpload("./storage/images"),
  UserController.createUser
);

/**
 * @swagger
 * /GetAll:
 *   get:
 *     description: Retrieve a list of all blog posts
 *     responses:
 *       200:
 *         description: List of blog posts
 *       404:
 *         description: No blog posts found
 */
router.get("/GetAll",UserController.allUser);

/**
 * @swagger
 * /singleblog/{id}:
 *   get:
 *     description: Retrieve a single blog post by id
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         required: true
 *         description: ID of the blog post to retrieve
 *     responses:
 *       200:
 *         description: Blog post found
 *       404:
 *         description: Blog post not found
 */
router.get("/singleblog/:id", UserController.singleUser);

/**
 * @swagger
 * /updateBlog/{id}:
 *   post:
 *     description: Update an existing blog post with an optional image
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         required: true
 *         description: ID of the blog post to update
 *       - in: formData
 *         name: image
 *         type: file
 *         required: false
 *         description: Image file to attach to the blog post
 *     responses:
 *       200:
 *         description: Blog post updated successfully
 *       400:
 *         description: Bad Request
 *       404:
 *         description: Blog post not found
 */
router.post(
  "/updateBlog/:id",
  fileUpload("./storage/images"),
  UserController.updateUser
);

/**
 * @swagger
 * /deleteBlog/{id}:
 *   delete:
 *     description: Delete a blog post by id
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         required: true
 *         description: ID of the blog post to delete
 *     responses:
 *       204:
 *         description: Blog post deleted successfully
 *       404:
 *         description: Blog post not found
 */
router.delete("/deleteBlog/:id",UserController.deleteUser);
module.exports = router;
