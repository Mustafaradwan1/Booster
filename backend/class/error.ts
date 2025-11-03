import express from "express";

class resError {
    static TokenNotProvides(){
        return {status:401 , message:'Token not Provides you should sign in'};
    }
    static DataNotComplete(data:string) {
        return {status:400 , message:{message:`${data} not provided`}};
    }
    static unknownError(){
        return {status:400 , message:{message:'error'}};
    }

    static notEmail(){
        return {status:401 , message:{message:'this is not email'}};
    }
    static invalidData(data:string)
    {
        return {status:400 , message:{message:`${data} is invalid`}};
    }
    static notVerified(){
        return {status:401 , message:{message:'the account was not verified'}};
    }
   static noUsers(){
        return {status:401 , message:{message:'no user found'}};
   }
   static notAdminOrSuper(data:string) {
        return {status:401 , message:{message:`you are not ${data} you have not access to do it`}};
   }
   static notProvides(data:string){
        return {status:400 , message:{message:`the ${data} was not provides`}}
   }
}
export default resError;
