import express from "express";
import{ges,user}from "../controllers/customer.js"
const router = express.Router();

router.get('/',ges)
router.post('/create',user)


export default router


