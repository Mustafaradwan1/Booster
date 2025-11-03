import express from 'express';
import error from "../../class/error";
import jwt from "jsonwebtoken";
import users from "../../dataBase/Users";
import successful from "../../class/successful";
const router = express.Router();
router.post('/upgrade' , async (req,res,next)=>{
    try{
        const body = req.body as {userId:string , role:string};
        if(!req.cookies.token){
            return res.status(error.TokenNotProvides().status).json(error.TokenNotProvides().message);
        }
        const token = jwt.verify(req.cookies.token, process.env.SECRET_KEY!) as { id: string };
        const id = token.id;
        const userSignIn = await users.findById(id);
        const user = await users.findById(body.userId);
        if(!user){
            return res.status(error.noUsers().status).json(error.noUsers().message)
        }
        if(!userSignIn){
            return res.status(error.noUsers().status).json(error.noUsers().message);
        }
        if(!(userSignIn.IsAdmin || userSignIn.IsSuperAdmin)){
            return res.status(error.notAdminOrSuper('admin or super').status).json(error.notAdminOrSuper('admin or super').message)
        }
        if(!body.userId || !body.role){
            return res.status(error.notProvides('userid or role').status).json(error.notProvides('userid or role').message);
        }
        if(body.role.toLowerCase()==="admin"){
            if(!userSignIn.IsSuperAdmin){
                return res.status(error.notAdminOrSuper('super admin').status).json(error.notAdminOrSuper('admin').message);

            }
            user.IsAdmin = true;
        }
        if(body.role.toLowerCase()==="isbooster"){
            user.IsBooster=true;
        }
        if(body.role.toLowerCase()==="isseller"){
            user.IsSeller=true;
        }
        await user.save();
        return res.status(successful.successful().status).json(successful.successful().message);
    }catch (e) {
        next(e)
    }
})
export default router;