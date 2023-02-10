const User = require("../models/user1.js");
//const Blog = require("../routes/api")

const mongoose = require("mongoose");
const fs = require("fs");

module.exports = class UserController {
  //New User Create
  static createUser = async (req, res) => {
    let payload = req.body;

    //  const decoded = jwt.verify(req.headers.authorization);
    //  console.log(decoded);

    //  const loggedUser = await User.findById(decoded.id);
    //  console.log(loggedUser);

    //Image check if have then include image into payload
    var imgUrl = "";
    if (req.file) var imgUrl = `storage/images/${req.file.filename}`;
    payload.avater = imgUrl;

    try {
      const userCreate = await new User(payload).save();
      return res.status(200).json({
        code: 200,
        message: "Blog Added Successfully",
        data: userCreate,
      });
    } catch (error) {
      res.status(501).json({
        code: 501,
        message: error.message,
        error: true,
      });
    }
  };

  //Single User Information
  static singleUser = async (req, res) => {
    const id = req.params.id;

    try {
      console.log(req.params.id);

      const singleUserInfo = await User.findById(id);
      const { name, title, discription, avater } = singleUserInfo;
      var getImageName = avater.match(/\/([^\/?#]+)[^\/]*$/);

      //return console.log(getImageName);

      const singleuUserData = {
        name,
        title,
        discription,
        
        imageUrl: `http://localhost:3333/user/${getImageName[1]}`,
      };
      return res.status(200).json({
        code: 200,
        message: "Blog Information",
        data: singleuUserData,
      });
      //return console.log(singleUserInfo)
    } catch (error) {
      res.status(501).json({
        code: 501,
        message: error.message,
        error: true,
      });
    }
  };

  //All User information
  static allUser = async (req, res) => {
    try {
      const allUserInfo = await User.find();

      //return console.log(singleUserInfo);
      return res.status(200).json({
        code: 200,
        message: "Blog info",
        data: allUserInfo,
      });
      //return console.log(singleUserInfo)
    } catch (error) {
      res.status(501).json({
        code: 501,
        message: error.message,
        error: true,
      });
    }
  };

  //User Update by User Id
  static updateUser = async (req, res) => {
    const id = req.params.id;
    let reqBody = req.body;

    //If File have then push file into reqBody then process update
    var imgUrl = "";
    if (req.file) var imgUrl = `storage/images/${req.file.filename}`;
    reqBody.avater = imgUrl;

    try {
      //Check user have photo/image. if had then first delete local file then database
      const userInfo = await User.findById(id);
      const userPhotoInfo = userInfo.avater;
      if (userPhotoInfo) {
        fs.unlinkSync(DIR + userPhotoInfo);
      }

      const updateItem = await User.findOneAndUpdate({ _id: id }, reqBody);
      return res.status(200).json({
        code: 200,
        message: "Blog Updated Successfully",
        data: updateItem,
      });
    } catch (error) {
      res.status(501).json({
        code: 501,
        message: error.message,
        error: true,
      });
    }
  };

  //User Delete By User Id
  static deleteUser = async (req, res) => {
    const id = req.params.id;
    //return console.log(id)
    try {
      const userDeleteinfo = await User.findOneAndDelete({ _id: id });
      const { avater } = userDeleteinfo;

      if (avater) {
        fs.unlinkSync(DIR + avater);
      }

      //const userDelete = await User.deleteOne({_id: id});
      return res.status(200).json({
        code: 200,
        message: "Blog Deleted Successfully",
        data: userDeleteinfo,
      });
    } catch (error) {
      res.status(501).json({
        code: 501,
        message: error.message,
        error: true,
      });
    }
  };

  //  const commentBlogs= async(req, res) => {

  //    const commented = await User.findOneAndUpdate(
  //      { _id: req.body._id },

  //      {
  //        Comment: {
  //          name: req.body.name,
  //          title: req.body.email,
  //          discription: req.body.discription,
  //          comment: req.body.comment,
  //        },
  //      }
  //    );

  // console.log(req.body);
  //   return res.status(200).json({
  //     code: 200,
  //     message: "blog commented sucussesfully",
  //     data: commented,
  //   });

  //   }

  // static commentBlogs = async (req, res) => {

  //   try {

  //     const  blog  = await User.findById(req.params.id);

  //     if(!blog){
  //       return  res.status(404).json({
  //         message:"Blog not found"
  //       })
  //     }
  // const comment  =  new Comment({
  //   author:req.body.author,
  //   text: req.body.text,

  // })
  //     blog.comments.push();

  //      await comment.save();
  //     await User.findOneAndUpdate({ _id: req.body._id }, { $push: { text } });
  //     return res.status(200).json({
  //       code: 200,
  //       message: "Comment added Successfully",
  //       data: comment,
  //     });
  //   } catch (error) {
  //     res.status(501).json({
  //       code: 501,
  //       message: error,
  //       error: true,
  //     });
  //   }
  // };
};
