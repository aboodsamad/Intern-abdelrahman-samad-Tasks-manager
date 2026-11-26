import {getAll} from "../services/tasks.service.js"

export function getAllTasks(req, res){
    res.json(getAll());
}