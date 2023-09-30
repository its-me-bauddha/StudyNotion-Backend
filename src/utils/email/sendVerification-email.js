const mailSender = require('./mail-sender');
const emailTemplate = require("../../mail/templates/emailVerificationTemplate");

async function sendVerificationEmail(email,otp){
    try {
        const mailResponse  = await mailSender(
            email,
            "Verification Email",
            emailTemplate(otp)
        );
        console.log("Mail sent successfully");
        return mailResponse;
    } catch (error) {
        console.log("Error occurred while sending the mail",error);
        throw error;
    }
}

module.exports = sendVerificationEmail;