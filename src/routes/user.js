const express = require("express");
const { signup, signin, signout } = require("../controllers/user");
const { check } = require("express-validator");
const router = express.Router();

/**
 * @swagger
 * /api/signup:
 *    post:
 *      summary: Creates a new user
 *      tags: [Users]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                email:
 *                  type: string
 *                  description: email of the user
 *                  example: testuser@gmail.com
 *                password:
 *                  type: string
 *                  description: password of the user
 *                  example: 123456
 *      responses:
 *        "200":
 *          description: A successful response
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    description: Success message
 *                    example: success
 *                  token:
 *                    type: string
 *                    description: JWT token for authentication
 *                    example: <token>
 *                  newUser:
 *                    type: object
 *                    description: Newly created user information
 *                    example: {<user information>}
 *        "400":
 *          description: Bad request
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    description: Error message
 *                    example: email has been taken
 *        "500":
 *          description: Internal server error
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    description: Error message
 *                    example: Internal server error
 */

router.post(
  "/signup",
  [
    check("name", "Name at least should be at least 3 character").isLength({
      min: 3,
    }),
    check("email", "Invalid Email").isEmail(),
    check(
      "password",
      "Password at least should be at least 6 character"
    ).isLength({ min: 6 }),
  ],
  signup
);
/**
 * @swagger
 *  /api/signin:
 *    post:
 *      summary: Signs in an existing user
 *      tags: [Users]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                email:
 *                  type: string
 *                  description: email of the user
 *                  example: testuser@gmail.com
 *                password:
 *                  type: string
 *                  description: password of the user
 *                  example: 123456
 *      responses:
 *        "200":
 *          description: A successful response
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  token:
 *                    type: string
 *                    description: JWT token for authentication
 *                    example: <token>
 *                  user:
 *                    type: object
 *                    description: User information
 *                    example: {_id: <user id>, name: <user name>, email: <user email>}
 *        "400":
 *          description: Bad request
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  error:
 *                    type: string
 *                    description: Error message
 *                    example: Email Not Found
 *        "500":
 *          description: Internal server error
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    description: Error message
 *                    example: Internal server error
 */

router.post("/signin", signin);


/**
 * @swagger
 *  /signout:
 *    post:
 *      summary: Signs out an existing user
 *      tags: [Users]
 *      responses:
 *        "200":
 *          description: A successful response
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    description: Success message
 *                    example: User Signout successful
 *        "500":
 *          description: Internal server error
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    description: Error message
 *                    example: Internal server error
 */

router.get("/signout", signout), (module.exports = router);
