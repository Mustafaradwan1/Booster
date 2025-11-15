import express from 'express'
import Auth from "./Auth";
import users from "../../dataBase/Users";
import error from "../../class/error";
import successful from "../../class/successful";
const router = express.Router();
router.use(Auth)
router.post('/' , async (req:any,res , next)=>{
    try {


    const body = req.body as {userId:string , role:string};
    const user = await users.findById(body.userId);
    if(!user){
        return res.status(error.noUsers().status).json(error.noUsers().message);
    }
    if(req.Auth === 'isSuperAdmin')
    if(body.role.toLowerCase().trim() === "admin"){
        user.IsAdmin = false;

    }
    if(body.role.toLowerCase().trim() === 'isbooster')
        user.IsBooster = false;
    if(body.role.toLowerCase().trim() === 'isseller'){
        user.IsSeller = false;
    }
    await user.save()
    res.status(successful.successful().status).json(successful.successful().message);

    }catch(err){
        next(err);
    }
})
export default router;
