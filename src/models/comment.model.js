const mongoose =require('mongoose') ;

var commentSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      required: "this field is required",
    },
    text: {
      type: String,
      required: "this filed is required",
    },
    blog: {
      type:String,
      ref: "Blog",
    },
  },
  {
    timestamps: true,
  }
);
module.export = mongoose.model("Comment", commentSchema);