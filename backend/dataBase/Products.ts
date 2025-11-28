import mongoose from 'mongoose';
const Schema = new mongoose.Schema({
    SellerId:{
        type:String,
        required:true,
    },ProductName:{
        type:String,
        required:true,
    },TheGame:{
        type:String,
        required:true,
    },Img:{
        type:String,
        required:true,
    },Description:{
        type:String,
        required:true,
        minLength:10
    },Price:{
        type:Number,
        required:true,
        default:0,
    },Count:{
        type:Number,
        required:true,
        default:1,
    }
});
const model = mongoose.model('products', Schema);
export default model;