import express, { Router } from "express";
import {getAllTasks} from "../controllers/tasks.controller.js"

const router = express.Router();
console.log("hello");

router.get("/" , getAllTasks);


export default router;