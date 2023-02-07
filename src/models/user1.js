const mongoose = require('mongoose');
const DataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter name'],
        trim: true,
        maxLength: [100, 'Product name cannot exceed 100 characters']
    },
    title: {
        type: String,
        reqired: true
    },
    discription: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    avater: {
        type: String,
        required: false
    },
    comments: {
        type:Array,
        required:true,
    }
},{ timestamps: true, versionKey:false })


module.exports = mongoose.model("users",DataSchema);
