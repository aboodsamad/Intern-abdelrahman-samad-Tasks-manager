import express, { Router } from "express";
import { getAllTasks, getTaskById } from "../controllers/tasks.controller.js";

const router = express.Router();
console.log("hello");

router.get("/", getAllTasks);
router.get("/:id", getTaskById);

export default router;
