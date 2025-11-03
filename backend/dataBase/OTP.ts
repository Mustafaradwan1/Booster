import mongoose from "mongoose";
const schema = new mongoose.Schema({
    otpNumber:{
        type:Number,}
    ,userId:{
        type:String
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 300 }
})
const model = mongoose.model('otp' , schema)
export default model;