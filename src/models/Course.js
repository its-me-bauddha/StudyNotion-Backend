const mongoose = require('mongoose');
const {Enums } = require("../utils/common");
const { Draft ,Published }  = Enums.status;
const courseSchema = new mongoose.Schema(
    {
        courseName:{
            type:String,
        },
        courseDescription:{
            type:String
        },
        whatYouWillLearn:{
            type:String
        },
        price:{
            type:Number
        },
        thumbnail:{
            type:String
        },
        tag: {
            type: [String],
            required: true,
        },
        instructor:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"User"
        },
        courseContent:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"Section"
            }
        ],
        ratingAndReviews:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"RatingAndReviews"
            }
        ],
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
        },
        studentsEnrolled: [
            {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: "User",
            },
        ],
        instructions:{
            type:[String]
        },
        status:{
            type:String,
            enum:[Draft,Published]
        }
    }
);

module.exports = mongoose.model("Course" , courseSchema);