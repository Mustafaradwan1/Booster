import express from 'express';
import signUp from "./sign-up/sign-up";
import signIn from './sign-in/sign-In'
import signOut from "./sign-out/sign-out";
const router = express.Router();

router.use('/sign-up', signUp);
router.use('/sign-in' , signIn);
router.use('/sign-out' , signOut);
export default router;