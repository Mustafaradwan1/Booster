import express from 'express';
import error from "../../class/error";
import users from "../../dataBase/Users";
import successful from "../../class/successful";
import Auth from "./Auth";
const router = express.Router();
router.use(Auth)

router.post('/' , async (req:any,res,next)=>{
    try{
        const body = req.body as {userId:string , role:string};


        const user = await users.findById(body.userId);
        if(!user){
            return res.status(error.noUsers().status).json(error.noUsers().message)
        }

        if(!body.userId || !body.role){
            return res.status(error.notProvides('userid or role').status).json(error.notProvides('userid or role').message);
        }
        const requesterRole = req.Auth;
        if (!requesterRole) {

            return res
                .status(error.TokenNotProvides().status)
                .json(error.TokenNotProvides().message);
        }
        if(body.role.toLowerCase().trim()==="admin"){
            if(requesterRole !== 'isSuperAdmin'){
                return res.status(error.notAdminOrSuper('super admin').status).json(error.notAdminOrSuper('admin').message);

            }
            user.IsAdmin = true;
        }
        if(body.role.toLowerCase().trim()==="isbooster"){
            user.IsBooster=true;
        }
        if(body.role.toLowerCase().trim()==="isseller"){
            user.IsSeller=true;
        }
        await user.save();
        return res.status(successful.successful().status).json(successful.successful().message);
    }catch (e) {
        next(e)
    }
})
export default router;