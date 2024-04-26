import { Router } from "express";
import { getData, submitData } from "../controllers/story.controller.js";

const router = Router()

router.route("/createstory").post(submitData).get(getData);


export default router