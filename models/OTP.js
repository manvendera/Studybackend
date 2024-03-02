const mongoose = require('mongoose');
const mailSender = require('../utills/mailSender');
const OTPSchema = new mongoose.Schema({
   email:{
    type:String,
    required:true
   },
   otp:{
    type:String,
    required:true,
   },
   createdAt:{
      type:Date,
      default:Date.now(),
      expire:5*60
   }
})
// function -> to send emails
async function sendVerificationEmail(email,otp) {
   try {
      const mailResponse =await mailSender(email,"Verification Email from StudyNotion",otp)
      console.log("Email send successfuly :",mailResponse);
   } catch (error) {
      console.log("error occured while sending mail",error);
      throw error
   }
}
OTPSchema.pre('save',async (next)=>{
   await sendVerificationEmail(this.email,this.otp);
   next()
})

module.exports = mongoose.model('OTP',OTPSchema)
