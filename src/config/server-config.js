const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    MAIL_HOST :process.env. MAIL_HOST,
    MAIL_USER:process.env.MAIL_USER,
    MAIL_PASSWORD:process.env.MAIL_PASSWORD,
    PORT : process.env.PORT,
}