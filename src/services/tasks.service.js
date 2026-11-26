import { tasks } from "../repo/tasks.js";

export const getAll = () => tasks;

export const taskById = (id) => tasks.find((p) => p.id === id);
