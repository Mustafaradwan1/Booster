import nodemailer from 'nodemailer';
import OTP from '../dataBase/OTP'
import users from "../dataBase/Users";
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
dotenv.config();
class functions {
    static async sendEmail(content:string , email:string , subject:string) {
        try {


            const mail = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.PASSWORD,
                }
            })
            await mail.sendMail({
                from: process.env.EMAIL,
                to: email,
                subject: `${subject}`,
                text: content,
            })
            return true;
        }catch(e:unknown) {
            if (e instanceof Error) {
                return e.message;
            } else {

                return e;
            }
        }
    }
    static async hashData(data:any): Promise<string> {
        try{
        const hash = await bcrypt.hash(data, +process.env.SALT_ROUND!);
        return hash;
        }
        catch(e:unknown) {
            if (e instanceof Error) {
                return e.message;
            } else {

                return ""+e;
            }
        }
    }
    static async sendOtp(email:string) {
try{
        const foundUser =await users.findOne({email:email});
        if (!foundUser) {
            return false;
        }else{
            const otpNumber = Math.floor(100000+Math.random()*(999999-100000 + 1));
            await this.sendEmail('the otp is '+ otpNumber , email , 'otp verify')
            const otpInDb = new OTP({otpNumber:otpNumber , userId:foundUser.id ,createdAt: new Date() });
            await otpInDb.save();
            return true
            }


        }catch(e:unknown) {
    return false;
}
    }
    static cookiesOption() {
        return  {
            httpOnly: true,
            secure: true,
            sameSite: "none" as const,
            path: "/",
            maxAge: 1000 * 60 * 60 * 24 * 7
        }
    }
    static async DeleteOtp(typeOfData:string,data:string) {
        if(typeOfData ==="email"){
            const user = await users.findOne({email:data})
            if(user){
                await OTP.findOneAndDelete({userId:user.id})
            }
        }else await OTP.findOneAndDelete({userId:data})
    }

    static async checkOtp( otp:number , email:string) {
            const user = await users.findOne({email:email})

            const otpFromDB = await OTP.findOne({userId:user!.id})
        if(!otpFromDB) return 'Time out'
        if(otp != otpFromDB.otpNumber) {
            return 'OTP not equal'

        }
        user!.IsVerified=true;
        user!.save()
       await this.DeleteOtp("id" , user!.id )
        return 'Done';


    }
    static isEmail(email:string) {
        const rel = /^[A-Z\d._-]+@[A-Z\d.-]+\.[A-Z]{2,}$/i

        return email.search(rel)!==-1 ;
    }
}
export default functions ;