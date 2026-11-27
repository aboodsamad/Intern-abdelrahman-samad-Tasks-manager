import { PRIORITIES, STATUSES, tasks } from "../repo/tasks.js";

export function checkId(req, res, next) {
  const id = Number(req.params.id);
  if (!id || id <= 0) return res.status(400).json({ message: "Invalid id" });
  req.id = id;
  next();
}

export function checkAtt(req, res, next) {
  const { title, status, priority } = req.body ?? {};
  const badTitle = !title || typeof title !== "string" || title.trim() === "";
  if (badTitle)
    return res
      .status(400)
      .json({ message: "Title must be a non-empty string" });
  if (!STATUSES.includes(status))
    return res.status(400).json({ message: "Invalid status" });
  if (!PRIORITIES.includes(priority))
    return res.status(400).json({ message: "Invalid priority" });
  next();
}
