/**
 * @swagger
 * definitions:
 *   User:
 *     type: object
 *     required:
 *       - title
 *       - description
 *       - active
 *     properties:
 *       name:
 *         type: string
 *         maxLength: 100
 *         description: Name of the user. Max length 100 characters.
 *       title:
 *         type: string
 *         description: Title of the user.
 *       description:
 *         type: string
 *         description: Description of the user.
 *       active:
 *         type: boolean
 *         default: true
 *         description: Status of the user.
 *       avatar:
 *         type: string
 *         description: Avatar of the user.
 *       comments:
 *         type: array
 *         description: Comments of the user.
 *     example:
 *       name: John Doe
 *       title: The title
 *       description: The description
 *       active: true
 *       avatar: https://avatar-url.com/avatar.jpg
 *       comments: ["Comment 1", "Comment 2"]
 */
/**
 * @swagger
 * definitions:
 *   User:
 *     type: object
 *     required:
 *       - title
 *       - description
 *       - active
 *     properties:
 *       name:
 *         type: string
 *         maxLength: 100
 *         description: Name of the user. Max length 100 characters.
 *       title:
 *         type: string
 *         description: Title of the user.
 *       description:
 *         type: string
 *         description: Description of the user.
 *       active:
 *         type: boolean
 *         default: true
 *         description: Status of the user.
 *       avatar:
 *         type: string
 *         description: Avatar of the user.
 *       comments:
 *         type: array
 *         description: Comments of the user.
 *     example:
 *       name: John Doe
 *       title: The title
 *       description: The description
 *       active: true
 *       avatar: https://avatar-url.com/avatar.jpg
 *       comments: ["Comment 1", "Comment 2"]
 */

const mongoose = require("mongoose");
const DataSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [false],
      trim: true,
      maxLength: [100, "Product name cannot exceed 100 characters"],
    },
    title: {
      type: String,
      reqired: true,
    },
    discription: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      required: true,
      default: true,
    },
    avater: {
      type: String,
      required: false,
    },
    comments: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("users", DataSchema);
