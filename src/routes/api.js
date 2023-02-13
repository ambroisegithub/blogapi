const express = require("express");
const UserController = require("../controllers/userController");
const fileUpload = require("../utils/fileUpload");
const router = express.Router();

/**
 * @swagger
 * paths:
 *   /api/v1/GetAll:
 *     get:
 *       tags:
 *         - User
 *       description: Get all users
 *       responses:
 *         200:
 *           description: Returns all users
 *         500:
 *           description: Internal server error
 *   /api/v1/singleblog/{id}:
 *     get:
 *       tags:
 *         - User
 *       description: Get a single user by id
 *       parameters:
 *         - in: path
 *           name: id
 *           type: string
 *           required: true
 *           description: Id of the user to retrieve
 *       responses:
 *         200:
 *           description: Returns the user
 *         404:
 *           description: User not found
 *         500:
 *           description: Internal server error
 *   /updateBlog/{id}:
 *     post:
 *       tags:
 *         - User
 *       description: Updates a user by id
 *       parameters:
 *         - in: path
 *           name: id
 *           type: string
 *           required: true
 *           description: Id of the user to update
 *         - in: formData
 *           name: image
 *           type: file
 *           required: true
 *           description: The image file to upload.
 *       responses:
 *         200:
 *           description: User updated successfully
 *         404:
 *           description: User not found
 *         500:
 *           description: Internal server error
 *   /api//deleteBlog/{id}:
 *     delete:
 *       tags:
 *         - User
 *       description: Deletes a user by id
 *       parameters:
 *         - in: path
 *           name: id
 *           type: string
 *           required: true
 *           description: Id of the user to delete
 *       responses:
 *         204:
 *           description: User deleted successfully
 *         404:
 *           description: User not found
 *         500:
 *           description: Internal server error
 */




/**
 * @swagger
 * /api/v1/postBlog:
 *  post:
 *    description: Use to create a new post
 *    tags: [Blog]
 *    security:
 *      - bearerAuth: []
 *    requestBody:
 *      required: true
 *      content:
 *        multipart/form-data:
 *          schema:
 *            type: object
 *            properties:
 *              avater:
 *                type: string
 *                format: binary
 *                description: The photo of the post
 *                required: true
 *              title:
 *                type: string
 *                description: The title of the post
 *                required: true
 *              description:
 *                type: string
 *                description: The description of the post
 *                required: true
 *    responses:
 *      200:
 *        description: The newly created post
 *        schema:
 *          type: object
 *          properties:
 *            savePost:
 *              type: object
 *              description: The post data
 *            status:
 *              type: string
 *              description: The status message
 *      500:
 *        description: Internal Server Error
 */



router.post(
  "/postBlog",

  fileUpload("./storage/images"),
  UserController.createUser
);



router.get("/GetAll", UserController.allUser);



router.get("/singleblog/:id", UserController.singleUser);



router.post(
  "/updateBlog/:id",

  fileUpload("./storage/images"),
  UserController.updateUser
);


router.delete("/deleteBlog/:id", UserController.deleteUser);

// router.post("/comment/:id", UserController.commentBlogs);

module.exports = router;
