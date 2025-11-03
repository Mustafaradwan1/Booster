import express from 'express';
import successful from "../../class/successful";
import functions from "../../class/functions";
const router = express.Router();
router.post('/' ,(req, res,next) => {
    try{
        res.clearCookie('token' , functions.cookiesOption());
        res.status(successful.successful().status).json(successful.successful().message);
    }catch (e){
        next(e);
    }


})
export default router;