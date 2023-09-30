const mongoose =require('mongoose');
const { VerificationEmail } = require('../utils/email')
const otpSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
	},
	otp: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
		expires: 60 * 5, // The document will be automatically deleted after 5 minutes of its creation time
	},
});

otpSchema.pre("save",
        async function(next){
            if(this.isNew){
                await VerificationEmail(this.email,this.otp);

            }
            next();
        }
)
const OTP = mongoose.model("OTP", OTPSchema);

module.exports = OTP;
