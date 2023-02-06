
const express = require('express');
const router = require('./src/routes/api');
 const userRoutes = require("./src/routes/user");
const app = new express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require("multer");
// const Bcomment = require("./src/controllers/comments.js");
//App use 
app.use(bodyParser.json());

require("dotenv").config();
const PORT = process.env.port || 3333;
mongoose.set("strictQuery",false);
//connect mongoDB
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log(`connected to mongodb`))
  .catch((err) => console.log(err));
(useNewUrlParser = true),
  (useUnifiedTopology = true),
  (useCreateIndex = true),
  // app.use(routes);
app.listen(PORT, () => console.log(`listening on: ${PORT}`));
// app.use("/comment", Bcomment);

app.use('/user', express.static('storage/images'))


//Base Route
app.use("/api/v1", router);
app.use("/api", userRoutes);
//Multer Error File Handling
app.use((err, req, res, next) => {
    if (err instanceof multer.MulterError) { // Multer-specific errors
        return res.status(418).json({
            err_code: err.code,
            err_message: err.message,
        });
    } else { // Handling errors for any other cases from whole application
        return res.status(500).json({
            err_code: 409,
            err_message: "Something went wrong!"
        });
    }
});

//Undefined Route Implement
app.use('*', (req, res)=>{
    res.status(404).json({status:"fail", data:"Not Found"})
});


module.exports = app;


