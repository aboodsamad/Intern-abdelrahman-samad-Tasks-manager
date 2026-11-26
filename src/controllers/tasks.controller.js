import {getAll, taskById} from "../services/tasks.service.js"
import { checkId } from "../middleware/checkId.middleware.js";


export function getAllTasks(req, res){
    res.json(getAll());
}

export function getTaskById(req ,res){
    const id = checkId(req);
    if(!id) return res.status(404).json("ID Not found");
    const task = taskById(id);
    return res.status(200).json(task);
}