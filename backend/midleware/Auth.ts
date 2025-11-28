import express from "express";
import error from "../class/error";
import jwt from "jsonwebtoken";
import users from "../dataBase/Users";

const router = express.Router();
router.use(async (req:any,res,next)=>{
    try{
        if(!req.cookies.token){
            return res.status(error.TokenNotProvides().status).json(error.TokenNotProvides().message);
        }
        const token = jwt.verify(req.cookies.token, process.env.SECRET_KEY!) as { id: string };
        const id = token.id;
        const userSignIn = await users.findById(id);
        if(!userSignIn){
            return res.status(error.noUsers().status).json(error.noUsers().message);
        }
        req.auth = {
            IsAdmin: userSignIn.IsAdmin,
            IsBooster: userSignIn.IsBooster,
            IsSupperAdmin: userSignIn.IsSuperAdmin,
            IsSeller: userSignIn.IsSeller,
            IsSupporter:userSignIn.IsSupporter
        };
        next();
    }catch (e) {
        next(e)
    }

} )
export default router;