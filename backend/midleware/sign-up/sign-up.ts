import express from 'express';
import error from '../../class/error'
import Users from "../../dataBase/Users";
import dotenv from 'dotenv';
import functions from "../../class/functions";
import Successful from "../../class/successful";
import jwt from 'jsonwebtoken'
import OTP from "../../dataBase/OTP";
dotenv.config();

const router = express.Router();
router.post('/' , async (req,res,next)=>{
   try{
       const data = req.body as {email:string , password:string , username:string};
       if(!data.email) {
           return res.status(error.DataNotComplete('email').status).json(error.DataNotComplete('email').message);
       }
       if(!data.password) {
           return  res.status(error.DataNotComplete('password').status).json(error.DataNotComplete('password').message);
       }
       if(!data.username) {
           return  res.status(error.DataNotComplete('username').status).json(error.DataNotComplete('username').message);
       }
       if(!functions.isEmail(data.email) )
       return res.status(error.notEmail().status).json(error.notEmail().message);
       const findUser = await Users.findOne({email:data.email})
       if(findUser) {
           if(findUser.IsVerified){
               return res.status(400).json({message:"this email already exists"});
           }else{
              await functions.DeleteOtp('id' ,findUser.id);
               await Users.findByIdAndDelete(findUser._id)
           }
       }
       data.password = await functions.hashData(data.password)
       const User = new Users(data);
       await User.save();
       await OTP.findOneAndDelete({userId:User.id});
       const sendmail = await functions.sendOtp(data.email)
       if(sendmail) {
           res.status(Successful.enterotp().status).json(Successful.enterotp().message);
       }else{
           res.status(error.unknownError().status).json(error.unknownError().message);
       }
   }catch(e){
       next(e)
   }
})
router.post('/verify-otp', async (req,res,next)=>{
    try{
        const data = req.body as {email:string , otp:number};
        const user =await Users.findOne({email:data.email});
        if(!user) return res.status(error.invalidData(data.email).status).json(error.invalidData('password').message);
        const result = await functions.checkOtp(data.otp , data.email);
        if(result ==='Time out'){
            return res.status(410).json({message:"Time out OTP"})
        }
        if(result==="OTP not equal") return res.status(401).json({message:"OTP not Correct"})
        if(result==="Done") {
            const token = jwt.sign({id:user._id},process.env.SECRET_KEY! ,{ expiresIn: "7d" });
            res.cookie("token" , token , functions.cookiesOption())
            return res.status(200).json({message: "Done"})

        }
    }catch(e){
        next(e)
    }

})
export default router;