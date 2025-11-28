import express from 'express';
import error from "../../class/error";
import users from "../../dataBase/Users";
import successful from "../../class/successful";
import Auth from "../Auth";
const router = express.Router();
router.use(Auth)
router.post('/' , async (req:any,res,next)=>{
    try{
        const body = req.body as {userId:string , role:string};

        if(!body.userId || !body.role){
            return res.status(error.notProvides('userid or role').status).json(error.notProvides('userid or role').message);
        }
        body.role = body.role.toLowerCase().trim();
        const user = await users.findById(body.userId);
        if(!user){
            return res.status(error.noUsers().status).json(error.noUsers().message)
        }

        if(!req.auth.IsAdmin && !req.auth.IsSuperAdmin){
            return res.status(error.haveNotAccess('Admin and super').status).json(error.haveNotAccess('Admin or super').message);
        }
        if(body.role == 'admin'){
            if(!req.auth.IsSuperAdmin){
                return res.status(error.haveNotAccess(' super').status).json(error.haveNotAccess('super admin').message);

            }
                user.IsAdmin = true;
        }
        if(body.role == 'isbooster'){
            user.IsBooster=true;

        }
        if(body.role == 'isseller'){
            user.IsSeller=true;
        }
        if(body.role == 'issupporter'){
            user.IsSupporter = true;
        }
        await user.save()
        res.status(successful.successful().status).json(successful.successful().message);
    }catch (e) {
        next(e)
    }
})
export default router;