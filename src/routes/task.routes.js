import express, { Router } from "express";
import { getAllTasks, getTaskById,changeTaskAttribute, addTask,delteTask } from "../controllers/tasks.controller.js";
import { checkAtt, checkId } from "../middleware/checkTaskAttributes.js";

const router = express.Router();

router.get("/", getAllTasks);
router.get("/:id",checkId, getTaskById);
router.put("/:id",checkAtt,changeTaskAttribute);
router.post("/", checkAtt, addTask);
router.delete("/:id", checkId, delteTask)


export default router;
