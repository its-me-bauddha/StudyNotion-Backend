const { StatusCodes } = require("http-status-codes");
const { UserService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

async function createUser(req,res){
    try {
        const user  = await UserService.createUser(
            {
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                email:req.body.email,
                password:req.body.password,
                confirmPassword :req.body.confirmPassword,
                accountType:req.body.accountType,
        
            }
        )
         SuccessResponse.data = user;
         return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        console.log(error);
        ErrorResponse.error = error;
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
}

async function getUser(req,res){
    try {
        const user  = await UserService.getUser(req.params.id)
        SuccessResponse.data = user;
        return res.status(StatusCodes.ACCEPTED).json(SuccessResponse);
   } catch (error) {
       console.log(error);
       ErrorResponse.error = error;
       return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
   }
}
async function getAllUser(req,res){
    try {
        const user  = await UserService.getAllUser()
        SuccessResponse.data = user;
        return res.status(StatusCodes.ACCEPTED).json(SuccessResponse);
   } catch (error) {
       console.log(error);
       ErrorResponse.error = error;
       return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
   }
}

module.exports ={
    createUser,
    getAllUser,
    getUser,
}

