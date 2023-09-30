const nodemailer = require('nodemailer');
const  {ServerConfig } = require('../../config')
const mailSender = async function (email,title,body) {
    try {
        let transporter = nodemailer.createTransport({
            host:ServerConfig.MAIL_HOST,
            auth:{
                user:ServerConfig.MAIL_USER,
                pass:ServerConfig.MAIL_PASSWORD,
            }
        });

        let info = transporter.sendMail({
           from:'StudyNotion',
           to:`${email}`,
           subject:`${title}`,
           html:`${body}`
        });
        return info
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = mailSender;