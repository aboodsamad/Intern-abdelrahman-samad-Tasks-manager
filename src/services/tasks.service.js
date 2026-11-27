import { tasks } from "../repo/tasks.js";

export const getAll = () => tasks;

export const taskById = (id) => tasks.find((p) => p.id === id);

export function editTask(id, title, status, priority) {
  const index = tasks.findIndex((p) => p.id === id);
  if (index === -1) return undefined;
  tasks[index] = { id, title, status, priority };
  return tasks[index];
}

export function pushTask(title, status, priority) {
  const id = Math.max(0, ...tasks.map((p) => p.id)) + 1;
  const newTask = { id, title, status, priority };
  tasks.push(newTask);
  return newTask;
}

export function popTask(id){
  const index = tasks.findIndex(p => p.id === id);
  if(index === -1) return undefined;
  return tasks.splice(index, 1);
}