import mongoose from "mongoose";
const schema =new  mongoose.Schema({
    IsAdmin:{
        type:Boolean,
        default:false,

    },IsSuperAdmin:{
        type:Boolean,
        default:false,
    },IsBooster:{
        type:Boolean,
        default:false,
    },username:{
        type:String,
        minLength:3,
        unique:true,
        require:true,
    },password:{
        type:String,
        require:true
    },email:{
        type:String,
        unique:true,
        require:true,
    },IsVerified:{
        type:Boolean,
        default:false,
    },IsSeller:{
        type:Boolean,
        default:false,
    }

})
const model = mongoose.model('Users' , schema);
export default model;
