const mongoose =require('mongoose') ;

const commentSchema = new mongoose.Schema({
  blogId: { type: String, required: true },
  author: { type: String, required: true },
  text: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.export = mongoose.model("Comment", commentSchema);
