import { tasks } from "../repo/tasks.js";
export function checkId(req) {
  const id = Number(req.params.id);
  const exist = tasks.some((p) => p.id === id);
  if (!exist) return undefined;
  return id;
}
