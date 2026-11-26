import { getAll, taskById, editTask } from "../services/tasks.service.js";
import { checkId } from "../middleware/checkTaskAttributes.js";

export function getAllTasks(req, res) {
  res.json(getAll());
}

export function getTaskById(req, res) {
  const id = Number(req.params.id);
  const task = taskById(id);
  if (!task) return res.status(404).json("Task Not Found");
  return res.status(200).json(task);
}

export function changeTaskAttribute(req, res) {
  const id = Number(req.params.id);
  const { title, status, priority } = req.body;
  const quote = editTask(id, title, status, priority);
  if (!quote) return res.status(404).json("quote has not been found");
  return res.status(201).json(quote);
}
