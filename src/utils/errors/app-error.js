class AppError extends Error {
    constructor (message,statusCodes){
        super(message);
        this.statusCodes = statusCodes;
        this.message = message;
    }
}

module.exports = AppError;