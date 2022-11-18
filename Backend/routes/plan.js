import express from "express";
import { addplan, buyplan, getplans } from "../controllers/plan.js";

const router = express.Router();

router.get('/getplans',getplans)
router.post('/addplan',addplan)
router.post('/buyplan',buyplan)


export default router

