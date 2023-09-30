// import the mongoose library
const mongoose = require('mongoose');
const {Enums}  = require('../utils/common')
const { Admin,Instructor ,Student}  = Enums.roles; 

//  Define the user schema using the Mongoose Schema constructor
const userSchema = new mongoose.Schema(
        {
            firstName:{
                type:String,
                required:true,
                trim:true,
            },
            lastName:{
                type:String,
                required:true,
                trim:true,
            },
            email:{
                type:String,
                required:true,
                trim:true,
            },
            password:{
                type:String,
                required:true,
                trim:true,
            },
            confirmPassword:{
                type:String,
                required:true,
                trim:true,
            },
            accountType:{
                type:String,
                enum : [Admin,Instructor,Student],
                //required:true,
            },
            active:{
                type:Boolean,
                default:true
            },
            approve:{
                type:Boolean,
                default:true
            },
            token:{
                type:String
            },
            resetPasswordExpires:{
                type:Date
            },
            image:{
                type:String,
                //required:true,
            },
            additionalDetails:{
                type:mongoose.Schema.Types.ObjectId,
               // required:true,
                ref:"Profile",
            },
            courses:[
                {
                    type:mongoose.Schema.Types.ObjectId,
                    ref:"Course"
                }
            ],
            courseProgress:[
                {
                    type:mongoose.Schema.Types.ObjectId,
                    ref:"CourseProgress"
                }
            ],
        },
        //todo ******* Add timestamps for when the document is created and last modified . *******
        {
            timestamps : true
        }
);

// Exports the schema -> 
module.exports = mongoose.model("User",userSchema);