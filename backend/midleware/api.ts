import downgrade from './Admin/downgrade'
import express from 'express';
import signUp from "./sign-up/sign-up";
import signIn from './sign-in/sign-In'
import signOut from "./sign-out/sign-out";
import upgrade from "./Admin/upgrade";
import Admin from "./Admin/Admin";
import AddProduct from "./Seller/AddProduct";
const router = express.Router();

router.use('/sign-up', signUp);
router.use('/sign-in' , signIn);
router.use('/sign-out' , signOut);
router.use('/admin', Admin);
router.use('/add-product',AddProduct)
export default router;