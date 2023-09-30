const { StatusCodes } = require("http-status-codes");
const { UserRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");

const userRepository = new UserRepository();

async function createUser(data){
    try {
        const user = await userRepository.create(data);
        console.log(user , 'User')
        return user;
    } catch (error) {
        console.log(error);
        throw new AppError('Something went wrong while creating new user' ,StatusCodes.INTERNAL_SERVER_ERROR);

    }
}

async function getUser(data){
   try {
         const response = await userRepository.get(data);
         console.log(data);
         return response;
   } catch (error) {
    console.log(error);
    throw new AppError('Something went wrong while fetching single user data');

   }
}

async function getAllUser(){
    try {
        const response = await userRepository.getAll();
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
        throw new AppError('Something went wrong while fetching all users data');
    }
}

module.exports = {
    createUser,
    getAllUser,
    getUser
}
