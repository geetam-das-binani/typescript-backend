import express, { Router } from "express";
import { getAllusers } from "../controller/userController.js";

const router: Router = express.Router();

router.get("/all", getAllusers);
export default router;
