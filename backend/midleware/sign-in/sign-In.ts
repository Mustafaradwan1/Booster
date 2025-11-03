import express from 'express';
import dotenv from 'dotenv';
import error from '../../class/error'
dotenv.config();
import Users from "../../dataBase/Users";
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";
import functions from "../../class/functions";
import successful from "../../class/successful";
const router = express.Router();
router.use(express.json());
router.post('/', async (req, res,next) => {
    try {
        const data = req.body as {email: string, password: string};
        if(!data.email){
            return res.status(error.DataNotComplete('email').status).json(error.DataNotComplete('email').message);
        }
        if(!data.password){
            return res.status(error.DataNotComplete('password').status).json(error.DataNotComplete('password').message);
        }
        const user = await Users.findOne({email:data.email});
        if(!user){
            return res.status(error.invalidData('email').status).json(error.invalidData('email').message);
        }
        if(!await bcrypt.compare(data.password , user.password!)){
            return res.status(error.invalidData('password').status).json(error.invalidData('password').message);
        }
        if(!user.IsVerified){
            return res.status(error.notVerified().status).json(error.notVerified().message);
        }
        res.cookie('token' ,  jwt.sign({id:user._id} ,  process.env.JWT_SECRET!, {expiresIn: '7d'}) , functions.cookiesOption());
        return res.status(successful.successful().status).json(successful.successful().message);
    }catch(e) {
        next(e);
    }

});
export default router;