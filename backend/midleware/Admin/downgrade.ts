import express from 'express'
import Auth from "../Auth";
import users from "../../dataBase/Users";
import error from "../../class/error";
import successful from "../../class/successful";
const router = express.Router();
router.use(Auth)
router.post('/' , async (req:any,res , next)=>{
    try {

    if(!req.auth.IsSuperAdmin && !req.auth.IsAdmin){
        return res.status(error.haveNotAccess('admin or super ').status).json(error.haveNotAccess('super admin').message);
    }
    const body = req.body as {userId:string , role:string};
    body.role = body.role.toLowerCase().trim();
    const user = await users.findById(body.userId);
    if(!user){
        return res.status(error.noUsers().status).json(error.noUsers().message);
    }
    if(req.auth.IsSuperAdmin)
    if(body.role === "admin"){
        user.IsAdmin = false;

    }
    if(body.role === 'isbooster')
        user.IsBooster = false;
    if(body.role === 'isseller'){
        user.IsSeller = false;
    }
    await user.save()
    res.status(successful.successful().status).json(successful.successful().message);

    }catch(err){
        next(err);
    }
})
export default router;
