import { PRIORITIES, STATUSES, tasks } from "../repo/tasks.js";

export function checkId(req, res, next) {
  const id = Number(req.params.id);
  if (!id || id <= 0) return res.status(400).json({ message: "Invalid id" });
  req.id = id;
  next();
}

export function checkAtt(req, res, next) {
  const {status, priority } = req.body;
  if (!STATUSES.includes(status) || !PRIORITIES.includes(priority))
    return res.status(400).json("Please Enter a valid status and priority");
  next();
}
