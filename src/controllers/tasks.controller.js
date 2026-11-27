import { getAll, taskById, editTask, pushTask, popTask } from "../services/tasks.service.js";
import { checkId } from "../middleware/checkTaskAttributes.js";


//getAll() 
export function getAllTasks(req, res) {
  res.json(getAll());
}

//taskById(id)
export function getTaskById(req, res) {
  const id = Number(req.params.id);
  const task = taskById(id);
  if (!task) return res.status(404).json("Task Not Found");
  return res.status(200).json(task);
}

//editTask(id, title, status, priority)
export function changeTaskAttribute(req, res) {
  const id = Number(req.params.id);
  const { title, status, priority } = req.body;
  const quote = editTask(id, title, status, priority);
  if (!quote) return res.status(404).json("quote has not been found");
  return res.status(201).json(quote);
}

//pushTask(title, status, priority)
export function addTask(req,res){
  const {title, status, priority} = req.body;
  const quote = pushTask(title, status, priority);
  return res.status(201).json(quote);
}

//popTask(id)
export function delteTask(req, res){
  const id = Number(req.params.id);
  const deleted = popTask(id);
  if(!deleted) return res.status(404).json({error: " quote not found"});
  return res.status(203).json("Quote has been delted succesfully ");

}