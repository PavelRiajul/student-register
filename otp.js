const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
  email: { type: String, required: true },
  otp: { type: String, required: true },
  status: { type: Number, default: 0 },
});

const OTPModel = mongoose.model('OTP', otpSchema);

module.exports = OTPModel;
