import { ITask } from "@/types/task";
import { API_URL } from "./api-url";

export const getTasks = (): Promise<ITask[]> =>
  fetch(`${API_URL}/tasks`, { cache: "no-store" }).then((response) =>
    response.json()
  );

export const createTask = (title: string) =>
  fetch(`${API_URL}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, completed: false }),
  }).then((response) => response.json());

export const toggleTask = (task: ITask) =>
  fetch(`${API_URL}/tasks/${task.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...task, completed: !task.completed }),
  });

export const deleteTask = (id: string) =>
  fetch(`${API_URL}/tasks/${id}`, { method: "DELETE" });
