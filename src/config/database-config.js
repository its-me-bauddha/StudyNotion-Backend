const mongoose = require('mongoose');
const dotenv = require('dotenv');
const AppError = require('../utils/errors/app-error');
const { StatusCodes } = require('http-status-codes');
require("dotenv").config();

const DATABASE_URL = process.env.DATABASE_URL;
exports.connect = ()=>{
    mongoose.connect( DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log('Database connection successful !!')
    })
    .catch(()=>{
        console.log(error);
        throw new AppError('Database connection failed !!',StatusCodes.INTERNAL_SERVER_ERROR);
    });
}