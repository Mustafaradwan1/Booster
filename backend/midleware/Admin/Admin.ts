import express from 'express';
import upgrade from "./upgrade";
import downgrade from "./downgrade";
const router = express.Router();

router.use('/upgrade',upgrade);
router.use('/downgrade',downgrade);
export default router;